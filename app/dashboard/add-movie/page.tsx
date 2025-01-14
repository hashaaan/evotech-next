"use client";

import { useRouter } from "next/navigation";
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

export default function CreateRecordPage() {
  const router = useRouter();
  const genresList: ListItem[] = GENRES.map((genre) => ({
    label: genre,
    value: genre,
  }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send a request to your API to create the record
    // Reset form
    // Redirect back to the dashboard
    router.push("/dashboard");
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
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <Label htmlFor="title">Movie Title</Label>
              <Input id="title" placeholder="Enter the movie title" />
            </div>
            <div>
              <Label htmlFor="year">Movie Year</Label>
              <Input id="year" type="number" placeholder="Enter the year" />
            </div>
            <div>
              <Label htmlFor="plot">Movie Plot</Label>
              <Textarea id="plot" placeholder="Enter the movie plot" />
            </div>
            <div>
              {/* <Label htmlFor="genres">Movie Genres</Label> */}
              {/* <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Select genres" />
                </SelectTrigger>
                <SelectContent>
                  {GENRES.map((genre) => (
                    <SelectItem key={genre} value={genre}>
                      {genre}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select> */}
              <MultiSelect
                list={genresList}
                label="Movie Genres"
                placeholder="Select movie genres"
              />
            </div>
            <div>
              <Label htmlFor="role">Movie Rating</Label>
              <Select>
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
