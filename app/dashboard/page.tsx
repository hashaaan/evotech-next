"use client";

import { Suspense } from "react";
import CountUp from "react-countup";
import { DataTable } from "./components/data-table";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function DashboardPage() {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold text-gray-800 hidden">Overview</h1>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <Card className="bg-gradient-to-br from-purple-500 to-indigo-500 text-white">
          <CardHeader>
            <CardTitle>Total Movies</CardTitle>
            <CardDescription className="text-purple-100">
              Movies added to the platform
            </CardDescription>
          </CardHeader>
          <CardContent>
            {/* <p className="text-4xl font-bold">234</p> */}
            <CountUp
              end={234}
              duration={5}
              delay={2}
              className="text-4xl font-bold"
            />
          </CardContent>
        </Card>
        <Card className="bg-gradient-to-br from-pink-500 to-red-500 text-white">
          <CardHeader>
            <CardTitle>Total Users</CardTitle>
            <CardDescription className="text-pink-100">
              Active accounts on the platform
            </CardDescription>
          </CardHeader>
          <CardContent>
            <CountUp
              end={12}
              duration={5}
              delay={2}
              className="text-4xl font-bold"
            />
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
            <CountUp
              end={42}
              duration={5}
              delay={2}
              className="text-4xl font-bold"
            />
          </CardContent>
        </Card>
      </div>
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl text-gray-800">
            Recent Movies
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
