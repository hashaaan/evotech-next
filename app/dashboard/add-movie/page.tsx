"use client";

import { useState, type FormEvent } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { GENRES, RATINGS } from "@/lib/constants";
import { type ListItem, MultiSelect } from "@/components/multi-select";

// Create movie mongodb server action
export const createMovie = () => {
  //
};

export default function CreateRecordPage() {
  const [genres, setGenres] = useState<string[]>([]);
  const [rated, setRated] = useState("");
  const genresList: ListItem[] = GENRES.map((genre) => ({
    label: genre,
    value: genre,
  }));

  const handleSubmitForm = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const title = formData.get("title")?.toString();
    const year = Number(formData.get("year"));
    const plot = formData.get("plot")?.toString();

    if (title && year && plot && rated) {
      console.log({ title, year, plot, rated, genres });
    }
  };

  return (
    <div className="space-y-4">
      <h1 className="text-3xl font-bold hidden">Add Movie</h1>
      <Card className="max-w-2xl mx-auto">
        <CardHeader>
          <CardTitle>Add Movie</CardTitle>
          <CardDescription>Add a movie to the Mflix database.</CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmitForm} className="space-y-4">
            <div>
              <Label htmlFor="title">Movie Title</Label>
              <Input
                id="title"
                name="title"
                placeholder="Enter the movie title"
              />
            </div>
            <div>
              <Label htmlFor="year">Movie Year</Label>
              <Input
                id="year"
                name="year"
                type="number"
                placeholder="Enter the year"
              />
            </div>
            <div>
              <Label htmlFor="plot">Movie Plot</Label>
              <Textarea
                id="plot"
                name="plot"
                placeholder="Enter the movie plot"
              />
            </div>
            <div>
              <Label htmlFor="genres">Movie Genres</Label>
              <MultiSelect
                list={genresList}
                placeholder="Select movie genres"
                onValueChange={setGenres}
              />
            </div>
            <div>
              <Label htmlFor="rated">Movie Rated</Label>
              <Select onValueChange={(val) => setRated(val)}>
                <SelectTrigger>
                  <SelectValue placeholder="Select a rating" />
                </SelectTrigger>
                <SelectContent>
                  {RATINGS.map((rating) => (
                    <SelectItem key={rating} value={rating}>
                      {rating}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div className="w-full flex justify-end space-x-2">
              <Button type="reset" variant="outline">
                Clear Form
              </Button>
              <Button type="submit">Add Movie</Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
