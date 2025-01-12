import { Suspense } from "react";
import { DataTable } from "./components/data-table";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default async function DashboardPage() {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold text-gray-800">
        Welcome to Your Dashboard
      </h1>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <Card className="bg-gradient-to-br from-purple-500 to-indigo-500 text-white">
          <CardHeader>
            <CardTitle>Total Users</CardTitle>
            <CardDescription className="text-purple-100">
              Active accounts on the platform
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-4xl font-bold">1,234</p>
          </CardContent>
        </Card>
        <Card className="bg-gradient-to-br from-pink-500 to-red-500 text-white">
          <CardHeader>
            <CardTitle>Revenue</CardTitle>
            <CardDescription className="text-pink-100">
              Total revenue this month
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-4xl font-bold">$12,345</p>
          </CardContent>
        </Card>
        <Card className="bg-gradient-to-br from-green-500 to-teal-500 text-white">
          <CardHeader>
            <CardTitle>Active Projects</CardTitle>
            <CardDescription className="text-green-100">
              Ongoing projects this week
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-4xl font-bold">42</p>
          </CardContent>
        </Card>
      </div>
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl text-gray-800">
            Recent Records
          </CardTitle>
          <CardDescription>View and manage your latest entries</CardDescription>
        </CardHeader>
        <CardContent>
          <Suspense
            fallback={
              <div className="text-center py-4">Loading records...</div>
            }
          >
            <DataTable />
          </Suspense>
        </CardContent>
      </Card>
    </div>
  );
}
