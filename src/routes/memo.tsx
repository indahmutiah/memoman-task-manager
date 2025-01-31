import { useParams } from "react-router";
import { useState } from "react";
import { Textarea } from "@/components/ui/textarea";
import { DataMemoItems } from "@/data/memo-items";
import { Button } from "@/components/ui/button";

export function MemoRoute() {
  const { id } = useParams();
  const [isEditing, setIsEditing] = useState(false);
  const [editedTitle, setEditedTitle] = useState("");
  const [editedDescription, setEditedDescription] = useState("");

  if (!id) return null;

  const memoItem = DataMemoItems.find((memo) => memo.id === Number(id));

  if (!memoItem) {
    return <div>Memo not found</div>;
  }

  const { title, description } = memoItem;
  const handleEditClick = () => {
    setIsEditing(true);
    setEditedTitle(title);
    setEditedDescription(description);
  };

  const handleSaveClick = () => {
    memoItem.title = editedTitle;
    memoItem.description = editedDescription;
    setIsEditing(false);
  };

  const handleCancelClick = () => {
    setIsEditing(false);
    setEditedTitle("");
    setEditedDescription("");
  };

  return (
    <>
      <div className="border-b border-gray-200 p-4 flex justify-between items-center">
        {isEditing ? (
          <input
            type="text"
            value={editedTitle}
            onChange={(e) => setEditedTitle(e.target.value)}
            className="text-2xl font-bold border p-2 rounded-md w-full"
          />
        ) : (
          <h2 className="text-2xl font-bold">
            <span className="ml-4">{title}</span>
          </h2>
        )}
        {!isEditing && (
          <Button onClick={handleEditClick} className="px-4 py-2 rounded-md">
            Edit
          </Button>
        )}
      </div>

      <div className="p-4">
        {isEditing ? (
          <>
            <Textarea
              value={editedDescription}
              onChange={(e) => setEditedDescription(e.target.value)}
            />
            <div className="mt-4 flex gap-2">
              <Button
                onClick={handleSaveClick}
                className="px-4 py-2 rounded-md"
              >
                Save
              </Button>
              <Button
                onClick={handleCancelClick}
                variant="destructive"
                className="px-4 py-2 rounded-md"
              >
                Cancel
              </Button>
            </div>
          </>
        ) : (
          <Textarea value={description} readOnly />
        )}
      </div>
    </>
  );
}
