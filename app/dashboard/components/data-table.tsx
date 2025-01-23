"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { EditRecordForm } from "./edit-record-form";
import { DeleteRecordDialog } from "./delete-record-dialog";

type Record = {
  id: string;
  name: string;
  email: string;
  role: string;
};

export function DataTable() {
  const [records, setRecords] = useState<Record[]>([
    { id: "1", name: "Hangover", email: "2009", role: "Action/Comedy" },
    { id: "2", name: "X-Men", email: "2000", role: "Action/Adventure" },
    { id: "3", name: "King Kong", email: "2005", role: "Action/Adventure" },
  ]);
  const [editingRecord, setEditingRecord] = useState<Record | null>(null);
  const [deletingRecord, setDeletingRecord] = useState<Record | null>(null);
  const router = useRouter();

  const handleEdit = (record: Record) => {
    setEditingRecord(record);
  };

  const handleDelete = (record: Record) => {
    setDeletingRecord(record);
  };

  const handleEditSubmit = (updatedRecord: Record) => {
    setRecords(
      records.map((r) => (r.id === updatedRecord.id ? updatedRecord : r)),
    );
    setEditingRecord(null);
    router.refresh();
  };

  const handleDeleteConfirm = (id: string) => {
    setRecords(records.filter((r) => r.id !== id));
    setDeletingRecord(null);
    router.refresh();
  };

  return (
    <div>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Title</TableHead>
            <TableHead>Year</TableHead>
            <TableHead>Genres</TableHead>
            <TableHead>Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {records.map((record) => (
            <TableRow key={record.id}>
              <TableCell>{record.name}</TableCell>
              <TableCell>{record.email}</TableCell>
              <TableCell>{record.role}</TableCell>
              <TableCell>
                <Button
                  variant="outline"
                  size="sm"
                  className="mr-2"
                  onClick={() => handleEdit(record)}
                >
                  Edit
                </Button>
                <Button
                  variant="destructive"
                  size="sm"
                  onClick={() => handleDelete(record)}
                >
                  Delete
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      {editingRecord && (
        <EditRecordForm
          record={editingRecord}
          onSubmit={handleEditSubmit}
          onCancel={() => setEditingRecord(null)}
        />
      )}
      {deletingRecord && (
        <DeleteRecordDialog
          record={deletingRecord}
          onConfirm={handleDeleteConfirm}
          onCancel={() => setDeletingRecord(null)}
        />
      )}
    </div>
  );
}
