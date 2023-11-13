import { useMemo, useState } from "react";
import { Column, Id } from "../types";
import PlusIcon from "../icons/PlusIcon";
import ColumnContainer from "./ColumnContainer";
import { DndContext, DragEndEvent, DragOverEvent, DragOverlay, DragStartEvent, PointerSensor, useSensor, useSensors } from "@dnd-kit/core";
import { SortableContext } from "@dnd-kit/sortable";
import { createPortal } from "react-dom";

// const defaultCols: Column[] = [
//   {
//     id: "todo",
//     title: "Todo",
//   },
//   {
//     id: "doing",
//     title: "Work in progress",
//   },
//   {
//     id: "done",
//     title: "Done",
//   },
// ];

// const defaultTasks: Task[] = [
//   { id: "1", columnId: "todo", content: "Task 1" },
//   { id: "2", columnId: "todo", content: "Task 2" },
//   { id: "3", columnId: "todo", content: "Task 3" },
// ];

const KanbanBoard = () => {
  const [columns, setColumns] = useState<Column[]>([]);
  const [activeColumn, setActiveColumn] = useState<Column | null>(null);
  const sensor = useSensors(
    useSensor(PointerSensor, {
      activationConstraint: {
        distance: 10,
      },
    })
  );

  const createNewColumn = () => {
    const columnToAdd: Column = {
      id: generatedId(),
      title: `Column ${columns.length + 1}`,
    };

    setColumns([...columns, columnToAdd]);
  };

  const generatedId = () => {
    return Math.floor(Math.random() * 10001);
  };

  const deleteColumn = (id: Id) => {
    const filteredColumns = columns.filter((col) => col.id !== id);
    setColumns(filteredColumns);
  };

  const updateColumn = (id: Id, title: string) => {
    const newColumns = columns.map((col) => {
      if (col.id !== id) return col;
      return { ...col, title };
    });
    setColumns(newColumns);
  };

  const columnsId = useMemo(() => columns.map((col) => col.id), [columns]);

  const onDragStart = (e: DragStartEvent) => {
    console.log("drag start", e);

    if (e.active.data.current?.type === "Column") {
      setActiveColumn(e.active.data.current.column);
      return;
    }
  };
  const onDragEnd = (e: DragEndEvent) => {
    const { active, over } = e;
    console.log("drag end", active, over);
  };
  const onDragOver = (e: DragOverEvent) => {
    const { active, over } = e;
    const activeId = active.id;
    const overId = over?.id;

    if (!over) return;

    if (activeId === overId) return;
  };
  console.log(columns);

  return (
    <div className="m-auto flex min-h-screen w-full items-center justify-center overflow-x-auto overflow-y-hidden px-[40px]">
      <DndContext sensors={sensor} onDragStart={onDragStart} onDragEnd={onDragEnd} onDragOver={onDragOver}>
        <div className="m-auto flex gap-4">
          <div className="flex gap-4">
            <SortableContext items={columnsId}>
              {columns.map((col) => (
                <ColumnContainer key={col.id} column={col} deleteColumn={deleteColumn} updateColumn={updateColumn} />
              ))}
            </SortableContext>

            <button
              onClick={() => createNewColumn()}
              className="h-[60px] w-[350px] min-w-[350px] cursor-pointer rounded-lg bg-mainBackgroundColor border-2 border-columnBackgroundColor p-4 ring-rose-500 hover:ring-2 flex gap-2"
            >
              <PlusIcon />
              Add Column
            </button>
          </div>

          {createPortal(<DragOverlay>{activeColumn && <ColumnContainer column={activeColumn} deleteColumn={deleteColumn} updateColumn={updateColumn} />}</DragOverlay>, document.body)}
        </div>
      </DndContext>
    </div>
  );
};

export default KanbanBoard;
