import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import type { Registration } from "@/lib/api";

interface RegistrationStatsProps {
  registrations: Registration[];
}

export function RegistrationStats({ registrations }: RegistrationStatsProps) {
  const total = registrations.length;

  const roleBreakdown = registrations.reduce(
    (acc, reg) => {
      acc[reg.role] = (acc[reg.role] || 0) + 1;
      return acc;
    },
    {} as Record<string, number>
  );

  const genderDistribution = registrations.reduce(
    (acc, reg) => {
      acc[reg.gender] = (acc[reg.gender] || 0) + 1;
      return acc;
    },
    {} as Record<string, number>
  );

  const levelDistribution = registrations.reduce(
    (acc, reg) => {
      acc[reg.level] = (acc[reg.level] || 0) + 1;
      return acc;
    },
    {} as Record<string, number>
  );

  const countryCount = registrations.reduce(
    (acc, reg) => {
      acc[reg.state_country] = (acc[reg.state_country] || 0) + 1;
      return acc;
    },
    {} as Record<string, number>
  );

  const topCountries = Object.entries(countryCount)
    .sort(([, a], [, b]) => b - a)
    .slice(0, 3);

  return (
    <div className="space-y-6">
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader>
            <CardTitle className="text-sm font-medium text-gray-600">
              Total Registrations
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-emerald-700">{total}</div>
            <p className="text-xs text-gray-500 mt-1">
              {total === 0 ? "Awaiting first signup" : "Active participants"}
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-sm font-medium text-gray-600">
              Role Distribution
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-2">
              <Badge variant="outline" className="bg-emerald-50">
                Instructors: {roleBreakdown["Instructor"] || 0}
              </Badge>
              <Badge variant="outline" className="bg-blue-50">
                Lead-Readers: {roleBreakdown["Lead-Reader"] || 0}
              </Badge>
              <Badge variant="outline" className="bg-purple-50">
                Students: {roleBreakdown["Student"] || 0}
              </Badge>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-sm font-medium text-gray-600">
              Gender Distribution
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-1">
              <div className="flex justify-between text-sm">
                <span className="text-gray-600">Male:</span>
                <span className="font-semibold">
                  {genderDistribution["male"] || 0} (
                  {total > 0
                    ? Math.round(((genderDistribution["male"] || 0) / total) * 100)
                    : 0}
                  %)
                </span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-600">Female:</span>
                <span className="font-semibold">
                  {genderDistribution["female"] || 0} (
                  {total > 0
                    ? Math.round(
                        ((genderDistribution["female"] || 0) / total) * 100
                      )
                    : 0}
                  %)
                </span>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-sm font-medium text-gray-600">
              Level Distribution
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-2">
              <Badge variant="outline" className="bg-green-50">
                Beginner: {levelDistribution["beginner"] || 0}
              </Badge>
              <Badge variant="outline" className="bg-yellow-50">
                Intermediate: {levelDistribution["intermediate"] || 0}
              </Badge>
              <Badge variant="outline" className="bg-red-50">
                Advanced: {levelDistribution["advanced"] || 0}
              </Badge>
            </div>
          </CardContent>
        </Card>
      </div>

      {topCountries.length > 0 && (
        <Card>
          <CardHeader>
            <CardTitle>Top Locations</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-3">
              {topCountries.map(([country, count], index) => (
                <Badge
                  key={country}
                  variant="outline"
                  className="bg-emerald-50 text-base px-4 py-2"
                >
                  #{index + 1} {country}: {count}
                </Badge>
              ))}
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
}
