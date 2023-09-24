'use client';

import { useEffect, useState } from 'react';
import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis } from 'recharts';
import { getAllSurvey } from '../../action/getRankings';
import moment from 'moment';

export default function Chart() {
  const [totalDaySurvey, setTotalDaySurvey] = useState([
    {
      total: 0,
      name: '',
    },
  ]);

  async function fetchTotalSurvey() {
    try {
      const totalSurvey = await getAllSurvey();
      if (totalSurvey) {
        const countByMonth = totalSurvey.reduce((acc, survey) => {
          const suveyDate = new Date(survey.createdAt);

          const month = suveyDate.getMonth() + 1;
          const year = suveyDate.getFullYear();

          // Create a key in the format "YYYY-MM"
          const key = `${year}-${String(month).padStart(2, '0')}`;

          // Increment the count for the month in the accumulator object
          acc[key] = (acc[key] || 0) + 1;

          return acc;
        }, {} as Record<string, number>);

        const totalDaySurvey = Object.keys(countByMonth).map((month) => {
          return {
            totalSurvey: countByMonth[month],
            month: moment(month, 'YYYY-MM').format('MMMM'),
          };
        });

        // console.log(totalDaySurvey[0].month);

        const totalDayEachMonth = totalDaySurvey.map((month) => {
          return {
            total: month.totalSurvey,
            name: month.month,
          };
        });

        setTotalDaySurvey([...totalDayEachMonth]);
      }
    } catch (error) {
      console.log('today', error);
    }
  }

  useEffect(() => {
    fetchTotalSurvey();
  }, []);

  return (
    <ResponsiveContainer width="100%" height={450}>
      <BarChart data={totalDaySurvey}>
        <XAxis
          dataKey="name"
          stroke="#888888"
          fontSize={12}
          tickLine={false}
          axisLine={false}
        />
        <YAxis
          stroke="#888888"
          fontSize={12}
          tickLine={false}
          axisLine={false}
          tickFormatter={(value) => `${value}`}
        />
        <Bar dataKey="total" fill="#adfa1d" radius={[4, 4, 0, 0]} />
      </BarChart>
    </ResponsiveContainer>
  );
}
