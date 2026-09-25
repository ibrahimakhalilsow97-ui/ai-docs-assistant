import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Check, Plus, X } from "lucide-react";

type Task = {
  id: string;
  text: string;
  done: boolean;
};

type Filter = "all" | "active" | "done";

const STORAGE_KEY = "todo-list-tasks";

const FILTERS: { value: Filter; label: string }[] = [
  { value: "all", label: "Toutes" },
  { value: "active", label: "À faire" },
  { value: "done", label: "Terminées" },
];

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "To-Do List — vos tâches, simplement" },
      {
        name: "description",
        content:
          "To-Do List : ajoutez, cochez et organisez vos tâches du quotidien. Vos tâches sont sauvegardées automatiquement dans votre navigateur.",
      },
      { property: "og:title", content: "To-Do List — vos tâches, simplement" },
      {
        property: "og:description",
        content:
          "Ajoutez, cochez et organisez vos tâches du quotidien. Sauvegarde automatique dans votre navigateur.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [draft, setDraft] = useState("");
  const [filter, setFilter] = useState<Filter>("all");
  const [hydrated, setHydrated] = useState(false);

  // Lecture de la sauvegarde locale après le rendu initial (côté navigateur).
  useEffect(() => {
    try {
      const raw = window.localStorage.getItem(STORAGE_KEY);
      if (raw) setTasks(JSON.parse(raw) as Task[]);
    } catch {
      // sauvegarde illisible : on repart d'une liste vide
    }
    setHydrated(true);
  }, []);

  // Sauvegarde automatique à chaque modification.
  useEffect(() => {
    if (!hydrated) return;
    try {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(tasks));
    } catch {
      // stockage indisponible : l'application fonctionne sans persistance
    }
  }, [tasks, hydrated]);

  const addTask = (event: React.FormEvent) => {
    event.preventDefault();
    const text = draft.trim();
    if (!text) return;
    setTasks([...tasks, { id: crypto.randomUUID(), text, done: false }]);
    setDraft("");
  };

  const toggleTask = (id: string) => {
    setTasks(tasks.map((t) => (t.id === id ? { ...t, done: !t.done } : t)));
  };

  const removeTask = (id: string) => {
    setTasks(tasks.filter((t) => t.id !== id));
  };

  const clearDone = () => {
    setTasks(tasks.filter((t) => !t.done));
  };

  const visible = tasks.filter((t) =>
    filter === "all" ? true : filter === "active" ? !t.done : t.done,
  );
  const remaining = tasks.filter((t) => !t.done).length;
  const doneCount = tasks.length - remaining;

  return (
    <div className="min-h-screen bg-background px-4 py-10 text-foreground">
      <main className="mx-auto w-full max-w-xl">
        <header className="text-center">
          <h1 className="font-hand text-5xl font-bold text-foreground">
            Ma To-Do List
          </h1>
          <p className="mt-2 text-sm text-muted-foreground">
            Vos tâches sont sauvegardées automatiquement dans votre navigateur.
          </p>
        </header>

        <form
          onSubmit={addTask}
          className="mt-8 flex gap-2 rounded-xl border border-border bg-card p-2 shadow-sm"
        >
          <input
            value={draft}
            onChange={(e) => setDraft(e.target.value)}
            placeholder="Ajouter une tâche…"
            aria-label="Nouvelle tâche"
            className="min-w-0 flex-1 rounded-lg bg-transparent px-3 py-2 text-sm outline-none placeholder:text-muted-foreground focus:ring-2 focus:ring-ring"
          />
          <button
            type="submit"
            className="inline-flex items-center gap-1.5 rounded-lg bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90 disabled:opacity-50"
            disabled={!draft.trim()}
          >
            <Plus className="size-4" aria-hidden />
            Ajouter
          </button>
        </form>

        <div
          role="tablist"
          aria-label="Filtres de tâches"
          className="mt-6 flex gap-1 rounded-lg border border-border bg-card p-1"
        >
          {FILTERS.map((f) => (
            <button
              key={f.value}
              role="tab"
              aria-selected={filter === f.value}
              onClick={() => setFilter(f.value)}
              className={`flex-1 rounded-md px-3 py-1.5 text-sm font-medium transition-colors ${
                filter === f.value
                  ? "bg-primary text-primary-foreground"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {f.label}
            </button>
          ))}
        </div>

        <section className="mt-4 rounded-xl border border-border bg-card shadow-sm">
          {visible.length === 0 ? (
            <p className="px-4 py-10 text-center text-sm text-muted-foreground">
              {tasks.length === 0
                ? "Aucune tâche pour l'instant — ajoutez la première !"
                : "Rien à afficher dans ce filtre."}
            </p>
          ) : (
            <ul className="divide-y divide-border">
              {visible.map((task) => (
                <li
                  key={task.id}
                  className="group flex items-center gap-3 px-4 py-3"
                >
                  <button
                    onClick={() => toggleTask(task.id)}
                    aria-pressed={task.done}
                    aria-label={
                      task.done
                        ? `Marquer « ${task.text} » comme à faire`
                        : `Marquer « ${task.text} » comme terminée`
                    }
                    className={`flex size-5 shrink-0 items-center justify-center rounded-full border-2 transition-colors ${
                      task.done
                        ? "border-primary bg-primary text-primary-foreground"
                        : "border-border hover:border-primary"
                    }`}
                  >
                    {task.done && <Check className="size-3" aria-hidden />}
                  </button>
                  <span
                    className={`min-w-0 flex-1 break-words text-sm transition-colors ${
                      task.done
                        ? "text-muted-foreground line-through decoration-2"
                        : "text-foreground"
                    }`}
                  >
                    {task.text}
                  </span>
                  <button
                    onClick={() => removeTask(task.id)}
                    aria-label={`Supprimer « ${task.text} »`}
                    className="shrink-0 rounded-md p-1.5 text-muted-foreground opacity-0 transition-all hover:bg-accent hover:text-destructive focus:opacity-100 group-hover:opacity-100"
                  >
                    <X className="size-4" aria-hidden />
                  </button>
                </li>
              ))}
            </ul>
          )}
        </section>

        <footer className="mt-4 flex items-center justify-between text-sm text-muted-foreground">
          <span>
            {remaining === 0
              ? "Tout est terminé, bravo !"
              : `${remaining} tâche${remaining > 1 ? "s" : ""} à faire`}
          </span>
          {doneCount > 0 && (
            <button
              onClick={clearDone}
              className="rounded-md px-2 py-1 font-medium transition-colors hover:text-destructive"
            >
              Effacer les terminées ({doneCount})
            </button>
          )}
        </footer>
      </main>
    </div>
  );
}
