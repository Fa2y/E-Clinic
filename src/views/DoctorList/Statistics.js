import { Button, Grid, Divider } from '@material-ui/core';
import React from 'react';
import { Bar, Doughnut, Pie } from 'react-chartjs-2';
import Card from 'components/Card/Card';

const Statistics = () => (
  <Grid container spacing={2}>
    <Grid item xs={12}>
      <Card>
        <Button variant="contained" color="secondary" size="large">
          Smoking
        </Button>
      </Card>
    </Grid>

    <Grid item xs={6}>
      <Card>
        <Button>Sorted by Existence</Button>
      </Card>
    </Grid>
    <Grid item xs={6}>
      <Card>
        <Button>Sorted by Level</Button>
      </Card>
    </Grid>

    <Grid item xs={6}>
      <Doughnut
        data={{
          labels: ['Smokers', 'Non-smokers'],
          datasets: [
            {
              label: '# of votes',
              data: [60, 125],
              backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                // 'rgba(255, 206, 86, 0.2)',
                // 'rgba(75, 192, 192, 0.2)',
                // 'rgba(153, 102, 255, 0.2)',
                // 'rgba(255, 159, 64, 0.2)',
              ],
              borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                // 'rgba(255, 206, 86, 1)',
                // 'rgba(75, 192, 192, 1)',
                // 'rgba(153, 102, 255, 1)',
                // 'rgba(255, 159, 64, 1)',
              ],
              borderWidth: 1,
            },
            // {
            //   label: 'Quantity',
            //   data: [47, 52, 67, 58, 9, 50],
            //   backgroundColor: 'orange',
            //   borderColor: 'red',
            // },
          ],
        }}
        height={400}
        width={600}
        options={{
          maintainAspectRatio: false,
          scales: {
            yAxes: [
              {
                ticks: {
                  beginAtZero: true,
                },
              },
            ],
          },
          legend: {
            labels: {
              fontSize: 25,
            },
          },
        }}
      />
    </Grid>

    <Grid item xs={6}>
      <Bar
        height={400}
        width={600}
        data={{
          labels: ['1CP', '2CP', '1CS', '2CS', '3CS', 'Teachers'],
          datasets: [
            {
              label: 'Sorted by Level',
              data: [40, 22, 3, 15, 20, 22],
              backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)',
              ],
              borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)',
              ],
              borderWidth: 1,
            },
          ],
        }}
        options={{
          maintainAspectRatio: false,
          scales: {
            yAxes: [
              {
                ticks: {
                  beginAtZero: true,
                },
              },
            ],
          },
          legend: {
            labels: {
              fontSize: 25,
            },
          },
        }}
      />
    </Grid>

    <Divider variant="middle" />

    <Grid item xs={12}>
      <Card>
        <Button variant="contained" color="secondary" size="large">
          Alcohol Consumption
        </Button>
      </Card>
    </Grid>
    <Grid item xs={4}>
      <Card>
        <Button>Sorted by Existence</Button>
      </Card>
    </Grid>
    <Grid item xs={4}>
      <Card>
        <Button>Sorted by Level</Button>
      </Card>
    </Grid>
    <Grid item xs={4}>
      <Card>
        <Button>Sorted by Sex</Button>
      </Card>
    </Grid>
    <Grid item xs={4}>
      <Doughnut
        data={{
          labels: ['Ill', 'Sane'],
          datasets: [
            {
              label: '# of votes',
              data: [12, 29],
              backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                // 'rgba(255, 206, 86, 0.2)',
                // 'rgba(75, 192, 192, 0.2)',
                // 'rgba(153, 102, 255, 0.2)',
                // 'rgba(255, 159, 64, 0.2)',
              ],
              borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                // 'rgba(255, 206, 86, 1)',
                // 'rgba(75, 192, 192, 1)',
                // 'rgba(153, 102, 255, 1)',
                // 'rgba(255, 159, 64, 1)',
              ],
              borderWidth: 1,
            },
            // {
            //   label: 'Quantity',
            //   data: [47, 52, 67, 58, 9, 50],
            //   backgroundColor: 'orange',
            //   borderColor: 'red',
            // },
          ],
        }}
        height={400}
        width={600}
        options={{
          maintainAspectRatio: false,
          scales: {
            yAxes: [
              {
                ticks: {
                  beginAtZero: true,
                },
              },
            ],
          },
          legend: {
            labels: {
              fontSize: 25,
            },
          },
        }}
      />
    </Grid>

    <Grid item xs={4}>
      <Bar
        height={400}
        width={600}
        data={{
          labels: ['1CP', '2CP', '1CS', '2CS', '3CS', 'Teachers'],
          datasets: [
            {
              label: 'Sorted by Level',
              data: [40, 22, 3, 15, 20, 22],
              backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)',
              ],
              borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)',
              ],
              borderWidth: 1,
            },
          ],
        }}
        options={{
          maintainAspectRatio: false,
          scales: {
            yAxes: [
              {
                ticks: {
                  beginAtZero: true,
                },
              },
            ],
          },
          legend: {
            labels: {
              fontSize: 25,
            },
          },
        }}
      />
    </Grid>
    <Grid item xs={4}>
      <Pie
        data={{
          labels: ['Women', 'Men'],
          datasets: [
            {
              label: 'Sorted by Percentage',
              data: [12, 19],
              backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                // 'rgba(255, 206, 86, 0.2)',
                // 'rgba(75, 192, 192, 0.2)',
                // 'rgba(153, 102, 255, 0.2)',
                // 'rgba(255, 159, 64, 0.2)',
              ],
              borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                // 'rgba(255, 206, 86, 1)',
                // 'rgba(75, 192, 192, 1)',
                // 'rgba(153, 102, 255, 1)',
                // 'rgba(255, 159, 64, 1)',
              ],
              borderWidth: 1,
            },
            //  {
            //    label: 'Quantity',
            //    data: [47, 52, 67, 58, 9, 50],
            //    backgroundColor: 'orange',
            //    borderColor: 'red',
            // },
          ],
        }}
        height={400}
        width={600}
        options={{
          maintainAspectRatio: false,
          scales: {
            yAxes: [
              {
                ticks: {
                  beginAtZero: true,
                },
              },
            ],
          },
          legend: {
            labels: {
              fontSize: 25,
            },
          },
        }}
      />
    </Grid>

    <Grid item xs={1} />
    <Grid item xs={10}>
      <Card>
        <Button variant="contained" color="primary" size="large">
          Chronical Diseases
        </Button>
      </Card>
    </Grid>
    <Grid item xs={1} />
    <Grid item xs={12}>
      <Card>
        <Button variant="contained" color="secondary" size="large">
          Diabetes
        </Button>
      </Card>
    </Grid>
    <Grid item xs={4}>
      <Card>
        <Button>Sorted by Existence</Button>
      </Card>
    </Grid>
    <Grid item xs={4}>
      <Card>
        <Button>Sorted by Level</Button>
      </Card>
    </Grid>
    <Grid item xs={4}>
      <Card>
        <Button>Sorted by Sex</Button>
      </Card>
    </Grid>
    <Grid item xs={4}>
      <Doughnut
        data={{
          labels: ['Ill', 'Sane'],
          datasets: [
            {
              label: '# of votes',
              data: [12, 29],
              backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                // 'rgba(255, 206, 86, 0.2)',
                // 'rgba(75, 192, 192, 0.2)',
                // 'rgba(153, 102, 255, 0.2)',
                // 'rgba(255, 159, 64, 0.2)',
              ],
              borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                // 'rgba(255, 206, 86, 1)',
                // 'rgba(75, 192, 192, 1)',
                // 'rgba(153, 102, 255, 1)',
                // 'rgba(255, 159, 64, 1)',
              ],
              borderWidth: 1,
            },
            // {
            //   label: 'Quantity',
            //   data: [47, 52, 67, 58, 9, 50],
            //   backgroundColor: 'orange',
            //   borderColor: 'red',
            // },
          ],
        }}
        height={400}
        width={600}
        options={{
          maintainAspectRatio: false,
          scales: {
            yAxes: [
              {
                ticks: {
                  beginAtZero: true,
                },
              },
            ],
          },
          legend: {
            labels: {
              fontSize: 25,
            },
          },
        }}
      />
    </Grid>

    <Grid item xs={4}>
      <Bar
        height={400}
        width={600}
        data={{
          labels: ['1CP', '2CP', '1CS', '2CS', '3CS', 'Teachers'],
          datasets: [
            {
              label: 'Sorted by Level',
              data: [40, 22, 3, 15, 20, 22],
              backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)',
              ],
              borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)',
              ],
              borderWidth: 1,
            },
          ],
        }}
        options={{
          maintainAspectRatio: false,
          scales: {
            yAxes: [
              {
                ticks: {
                  beginAtZero: true,
                },
              },
            ],
          },
          legend: {
            labels: {
              fontSize: 25,
            },
          },
        }}
      />
    </Grid>
    <Grid item xs={4}>
      <Pie
        data={{
          labels: ['Women', 'Men'],
          datasets: [
            {
              label: 'Sorted by Percentage',
              data: [12, 19],
              backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                // 'rgba(255, 206, 86, 0.2)',
                // 'rgba(75, 192, 192, 0.2)',
                // 'rgba(153, 102, 255, 0.2)',
                // 'rgba(255, 159, 64, 0.2)',
              ],
              borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                // 'rgba(255, 206, 86, 1)',
                // 'rgba(75, 192, 192, 1)',
                // 'rgba(153, 102, 255, 1)',
                // 'rgba(255, 159, 64, 1)',
              ],
              borderWidth: 1,
            },
            //  {
            //    label: 'Quantity',
            //    data: [47, 52, 67, 58, 9, 50],
            //    backgroundColor: 'orange',
            //    borderColor: 'red',
            // },
          ],
        }}
        height={400}
        width={600}
        options={{
          maintainAspectRatio: false,
          scales: {
            yAxes: [
              {
                ticks: {
                  beginAtZero: true,
                },
              },
            ],
          },
          legend: {
            labels: {
              fontSize: 25,
            },
          },
        }}
      />
    </Grid>

    <Divider variant="middle" />

    <Grid item xs={12}>
      <Card>
        <Button variant="contained" color="secondary" size="large">
          Blood Pressure
        </Button>
      </Card>
    </Grid>
    <Grid item xs={4}>
      <Card>
        <Button>Sorted by Existence</Button>
      </Card>
    </Grid>
    <Grid item xs={4}>
      <Card>
        <Button>Sorted by Level</Button>
      </Card>
    </Grid>
    <Grid item xs={4}>
      <Card>
        <Button>Sorted by Sex</Button>
      </Card>
    </Grid>
    <Grid item xs={4}>
      <Doughnut
        data={{
          labels: ['Ill', 'Sane'],
          datasets: [
            {
              label: '# of votes',
              data: [12, 29],
              backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                // 'rgba(255, 206, 86, 0.2)',
                // 'rgba(75, 192, 192, 0.2)',
                // 'rgba(153, 102, 255, 0.2)',
                // 'rgba(255, 159, 64, 0.2)',
              ],
              borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                // 'rgba(255, 206, 86, 1)',
                // 'rgba(75, 192, 192, 1)',
                // 'rgba(153, 102, 255, 1)',
                // 'rgba(255, 159, 64, 1)',
              ],
              borderWidth: 1,
            },
            // {
            //   label: 'Quantity',
            //   data: [47, 52, 67, 58, 9, 50],
            //   backgroundColor: 'orange',
            //   borderColor: 'red',
            // },
          ],
        }}
        height={400}
        width={600}
        options={{
          maintainAspectRatio: false,
          scales: {
            yAxes: [
              {
                ticks: {
                  beginAtZero: true,
                },
              },
            ],
          },
          legend: {
            labels: {
              fontSize: 25,
            },
          },
        }}
      />
    </Grid>

    <Grid item xs={4}>
      <Bar
        height={400}
        width={600}
        data={{
          labels: ['1CP', '2CP', '1CS', '2CS', '3CS', 'Teachers'],
          datasets: [
            {
              label: 'Sorted by Level',
              data: [40, 22, 3, 15, 20, 22],
              backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)',
              ],
              borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)',
              ],
              borderWidth: 1,
            },
          ],
        }}
        options={{
          maintainAspectRatio: false,
          scales: {
            yAxes: [
              {
                ticks: {
                  beginAtZero: true,
                },
              },
            ],
          },
          legend: {
            labels: {
              fontSize: 25,
            },
          },
        }}
      />
    </Grid>
    <Grid item xs={4}>
      <Pie
        data={{
          labels: ['Women', 'Men'],
          datasets: [
            {
              label: 'Sorted by Percentage',
              data: [12, 19],
              backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                // 'rgba(255, 206, 86, 0.2)',
                // 'rgba(75, 192, 192, 0.2)',
                // 'rgba(153, 102, 255, 0.2)',
                // 'rgba(255, 159, 64, 0.2)',
              ],
              borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                // 'rgba(255, 206, 86, 1)',
                // 'rgba(75, 192, 192, 1)',
                // 'rgba(153, 102, 255, 1)',
                // 'rgba(255, 159, 64, 1)',
              ],
              borderWidth: 1,
            },
            //  {
            //    label: 'Quantity',
            //    data: [47, 52, 67, 58, 9, 50],
            //    backgroundColor: 'orange',
            //    borderColor: 'red',
            // },
          ],
        }}
        height={400}
        width={600}
        options={{
          maintainAspectRatio: false,
          scales: {
            yAxes: [
              {
                ticks: {
                  beginAtZero: true,
                },
              },
            ],
          },
          legend: {
            labels: {
              fontSize: 25,
            },
          },
        }}
      />
    </Grid>

    <Divider variant="middle" />

    <Grid item xs={12}>
      <Card>
        <Button variant="contained" color="secondary" size="large">
          Heart Problems
        </Button>
      </Card>
    </Grid>
    <Grid item xs={4}>
      <Card>
        <Button>Sorted by Existence</Button>
      </Card>
    </Grid>
    <Grid item xs={4}>
      <Card>
        <Button>Sorted by Level</Button>
      </Card>
    </Grid>
    <Grid item xs={4}>
      <Card>
        <Button>Sorted by Sex</Button>
      </Card>
    </Grid>
    <Grid item xs={4}>
      <Doughnut
        data={{
          labels: ['Ill', 'Sane'],
          datasets: [
            {
              label: '# of votes',
              data: [12, 29],
              backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                // 'rgba(255, 206, 86, 0.2)',
                // 'rgba(75, 192, 192, 0.2)',
                // 'rgba(153, 102, 255, 0.2)',
                // 'rgba(255, 159, 64, 0.2)',
              ],
              borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                // 'rgba(255, 206, 86, 1)',
                // 'rgba(75, 192, 192, 1)',
                // 'rgba(153, 102, 255, 1)',
                // 'rgba(255, 159, 64, 1)',
              ],
              borderWidth: 1,
            },
            // {
            //   label: 'Quantity',
            //   data: [47, 52, 67, 58, 9, 50],
            //   backgroundColor: 'orange',
            //   borderColor: 'red',
            // },
          ],
        }}
        height={400}
        width={600}
        options={{
          maintainAspectRatio: false,
          scales: {
            yAxes: [
              {
                ticks: {
                  beginAtZero: true,
                },
              },
            ],
          },
          legend: {
            labels: {
              fontSize: 25,
            },
          },
        }}
      />
    </Grid>

    <Grid item xs={4}>
      <Bar
        height={400}
        width={600}
        data={{
          labels: ['1CP', '2CP', '1CS', '2CS', '3CS', 'Teachers'],
          datasets: [
            {
              label: 'Sorted by Level',
              data: [40, 22, 3, 15, 20, 22],
              backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)',
              ],
              borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)',
              ],
              borderWidth: 1,
            },
          ],
        }}
        options={{
          maintainAspectRatio: false,
          scales: {
            yAxes: [
              {
                ticks: {
                  beginAtZero: true,
                },
              },
            ],
          },
          legend: {
            labels: {
              fontSize: 25,
            },
          },
        }}
      />
    </Grid>
    <Grid item xs={4}>
      <Pie
        data={{
          labels: ['Women', 'Men'],
          datasets: [
            {
              label: 'Sorted by Percentage',
              data: [12, 19],
              backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                // 'rgba(255, 206, 86, 0.2)',
                // 'rgba(75, 192, 192, 0.2)',
                // 'rgba(153, 102, 255, 0.2)',
                // 'rgba(255, 159, 64, 0.2)',
              ],
              borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                // 'rgba(255, 206, 86, 1)',
                // 'rgba(75, 192, 192, 1)',
                // 'rgba(153, 102, 255, 1)',
                // 'rgba(255, 159, 64, 1)',
              ],
              borderWidth: 1,
            },
            //  {
            //    label: 'Quantity',
            //    data: [47, 52, 67, 58, 9, 50],
            //    backgroundColor: 'orange',
            //    borderColor: 'red',
            // },
          ],
        }}
        height={400}
        width={600}
        options={{
          maintainAspectRatio: false,
          scales: {
            yAxes: [
              {
                ticks: {
                  beginAtZero: true,
                },
              },
            ],
          },
          legend: {
            labels: {
              fontSize: 25,
            },
          },
        }}
      />
    </Grid>

    <Divider variant="middle" />

    <Grid item xs={12}>
      <Card>
        <Button variant="contained" color="secondary" size="large">
          Respiratory Diseases
        </Button>
      </Card>
    </Grid>
    <Grid item xs={4}>
      <Card>
        <Button>Sorted by Existence</Button>
      </Card>
    </Grid>
    <Grid item xs={4}>
      <Card>
        <Button>Sorted by Level</Button>
      </Card>
    </Grid>
    <Grid item xs={4}>
      <Card>
        <Button>Sorted by Sex</Button>
      </Card>
    </Grid>
    <Grid item xs={4}>
      <Doughnut
        data={{
          labels: ['Ill', 'Sane'],
          datasets: [
            {
              label: '# of votes',
              data: [12, 29],
              backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                // 'rgba(255, 206, 86, 0.2)',
                // 'rgba(75, 192, 192, 0.2)',
                // 'rgba(153, 102, 255, 0.2)',
                // 'rgba(255, 159, 64, 0.2)',
              ],
              borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                // 'rgba(255, 206, 86, 1)',
                // 'rgba(75, 192, 192, 1)',
                // 'rgba(153, 102, 255, 1)',
                // 'rgba(255, 159, 64, 1)',
              ],
              borderWidth: 1,
            },
            // {
            //   label: 'Quantity',
            //   data: [47, 52, 67, 58, 9, 50],
            //   backgroundColor: 'orange',
            //   borderColor: 'red',
            // },
          ],
        }}
        height={400}
        width={600}
        options={{
          maintainAspectRatio: false,
          scales: {
            yAxes: [
              {
                ticks: {
                  beginAtZero: true,
                },
              },
            ],
          },
          legend: {
            labels: {
              fontSize: 25,
            },
          },
        }}
      />
    </Grid>

    <Grid item xs={4}>
      <Bar
        height={400}
        width={600}
        data={{
          labels: ['1CP', '2CP', '1CS', '2CS', '3CS', 'Teachers'],
          datasets: [
            {
              label: 'Sorted by Level',
              data: [40, 22, 3, 15, 20, 22],
              backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)',
              ],
              borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)',
              ],
              borderWidth: 1,
            },
          ],
        }}
        options={{
          maintainAspectRatio: false,
          scales: {
            yAxes: [
              {
                ticks: {
                  beginAtZero: true,
                },
              },
            ],
          },
          legend: {
            labels: {
              fontSize: 25,
            },
          },
        }}
      />
    </Grid>
    <Grid item xs={4}>
      <Pie
        data={{
          labels: ['Women', 'Men'],
          datasets: [
            {
              label: 'Sorted by Percentage',
              data: [12, 19],
              backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                // 'rgba(255, 206, 86, 0.2)',
                // 'rgba(75, 192, 192, 0.2)',
                // 'rgba(153, 102, 255, 0.2)',
                // 'rgba(255, 159, 64, 0.2)',
              ],
              borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                // 'rgba(255, 206, 86, 1)',
                // 'rgba(75, 192, 192, 1)',
                // 'rgba(153, 102, 255, 1)',
                // 'rgba(255, 159, 64, 1)',
              ],
              borderWidth: 1,
            },
            //  {
            //    label: 'Quantity',
            //    data: [47, 52, 67, 58, 9, 50],
            //    backgroundColor: 'orange',
            //    borderColor: 'red',
            // },
          ],
        }}
        height={400}
        width={600}
        options={{
          maintainAspectRatio: false,
          scales: {
            yAxes: [
              {
                ticks: {
                  beginAtZero: true,
                },
              },
            ],
          },
          legend: {
            labels: {
              fontSize: 25,
            },
          },
        }}
      />
    </Grid>

    <Divider variant="middle" />

    <Grid item xs={12}>
      <Card>
        <Button variant="contained" color="secondary" size="large">
          Digestif Diseases
        </Button>
      </Card>
    </Grid>
    <Grid item xs={4}>
      <Card>
        <Button>Sorted by Existence</Button>
      </Card>
    </Grid>
    <Grid item xs={4}>
      <Card>
        <Button>Sorted by Level</Button>
      </Card>
    </Grid>
    <Grid item xs={4}>
      <Card>
        <Button>Sorted by Sex</Button>
      </Card>
    </Grid>
    <Grid item xs={4}>
      <Doughnut
        data={{
          labels: ['Ill', 'Sane'],
          datasets: [
            {
              label: '# of votes',
              data: [12, 29],
              backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                // 'rgba(255, 206, 86, 0.2)',
                // 'rgba(75, 192, 192, 0.2)',
                // 'rgba(153, 102, 255, 0.2)',
                // 'rgba(255, 159, 64, 0.2)',
              ],
              borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                // 'rgba(255, 206, 86, 1)',
                // 'rgba(75, 192, 192, 1)',
                // 'rgba(153, 102, 255, 1)',
                // 'rgba(255, 159, 64, 1)',
              ],
              borderWidth: 1,
            },
            // {
            //   label: 'Quantity',
            //   data: [47, 52, 67, 58, 9, 50],
            //   backgroundColor: 'orange',
            //   borderColor: 'red',
            // },
          ],
        }}
        height={400}
        width={600}
        options={{
          maintainAspectRatio: false,
          scales: {
            yAxes: [
              {
                ticks: {
                  beginAtZero: true,
                },
              },
            ],
          },
          legend: {
            labels: {
              fontSize: 25,
            },
          },
        }}
      />
    </Grid>

    <Grid item xs={4}>
      <Bar
        height={400}
        width={600}
        data={{
          labels: ['1CP', '2CP', '1CS', '2CS', '3CS', 'Teachers'],
          datasets: [
            {
              label: 'Sorted by Level',
              data: [40, 22, 3, 15, 20, 22],
              backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)',
              ],
              borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)',
              ],
              borderWidth: 1,
            },
          ],
        }}
        options={{
          maintainAspectRatio: false,
          scales: {
            yAxes: [
              {
                ticks: {
                  beginAtZero: true,
                },
              },
            ],
          },
          legend: {
            labels: {
              fontSize: 25,
            },
          },
        }}
      />
    </Grid>
    <Grid item xs={4}>
      <Pie
        data={{
          labels: ['Women', 'Men'],
          datasets: [
            {
              label: 'Sorted by Percentage',
              data: [12, 19],
              backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                // 'rgba(255, 206, 86, 0.2)',
                // 'rgba(75, 192, 192, 0.2)',
                // 'rgba(153, 102, 255, 0.2)',
                // 'rgba(255, 159, 64, 0.2)',
              ],
              borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                // 'rgba(255, 206, 86, 1)',
                // 'rgba(75, 192, 192, 1)',
                // 'rgba(153, 102, 255, 1)',
                // 'rgba(255, 159, 64, 1)',
              ],
              borderWidth: 1,
            },
            //  {
            //    label: 'Quantity',
            //    data: [47, 52, 67, 58, 9, 50],
            //    backgroundColor: 'orange',
            //    borderColor: 'red',
            // },
          ],
        }}
        height={400}
        width={600}
        options={{
          maintainAspectRatio: false,
          scales: {
            yAxes: [
              {
                ticks: {
                  beginAtZero: true,
                },
              },
            ],
          },
          legend: {
            labels: {
              fontSize: 25,
            },
          },
        }}
      />
    </Grid>

    <Divider variant="middle" />

    <Grid item xs={12}>
      <Card>
        <Button variant="contained" color="secondary" size="large">
          ORL Diseases
        </Button>
      </Card>
    </Grid>
    <Grid item xs={4}>
      <Card>
        <Button>Sorted by Existence</Button>
      </Card>
    </Grid>
    <Grid item xs={4}>
      <Card>
        <Button>Sorted by Level</Button>
      </Card>
    </Grid>
    <Grid item xs={4}>
      <Card>
        <Button>Sorted by Sex</Button>
      </Card>
    </Grid>
    <Grid item xs={4}>
      <Doughnut
        data={{
          labels: ['Ill', 'Sane'],
          datasets: [
            {
              label: '# of votes',
              data: [12, 29],
              backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                // 'rgba(255, 206, 86, 0.2)',
                // 'rgba(75, 192, 192, 0.2)',
                // 'rgba(153, 102, 255, 0.2)',
                // 'rgba(255, 159, 64, 0.2)',
              ],
              borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                // 'rgba(255, 206, 86, 1)',
                // 'rgba(75, 192, 192, 1)',
                // 'rgba(153, 102, 255, 1)',
                // 'rgba(255, 159, 64, 1)',
              ],
              borderWidth: 1,
            },
            // {
            //   label: 'Quantity',
            //   data: [47, 52, 67, 58, 9, 50],
            //   backgroundColor: 'orange',
            //   borderColor: 'red',
            // },
          ],
        }}
        height={400}
        width={600}
        options={{
          maintainAspectRatio: false,
          scales: {
            yAxes: [
              {
                ticks: {
                  beginAtZero: true,
                },
              },
            ],
          },
          legend: {
            labels: {
              fontSize: 25,
            },
          },
        }}
      />
    </Grid>

    <Grid item xs={4}>
      <Bar
        height={400}
        width={600}
        data={{
          labels: ['1CP', '2CP', '1CS', '2CS', '3CS', 'Teachers'],
          datasets: [
            {
              label: 'Sorted by Level',
              data: [40, 22, 3, 15, 20, 22],
              backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)',
              ],
              borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)',
              ],
              borderWidth: 1,
            },
          ],
        }}
        options={{
          maintainAspectRatio: false,
          scales: {
            yAxes: [
              {
                ticks: {
                  beginAtZero: true,
                },
              },
            ],
          },
          legend: {
            labels: {
              fontSize: 25,
            },
          },
        }}
      />
    </Grid>
    <Grid item xs={4}>
      <Pie
        data={{
          labels: ['Women', 'Men'],
          datasets: [
            {
              label: 'Sorted by Percentage',
              data: [12, 19],
              backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                // 'rgba(255, 206, 86, 0.2)',
                // 'rgba(75, 192, 192, 0.2)',
                // 'rgba(153, 102, 255, 0.2)',
                // 'rgba(255, 159, 64, 0.2)',
              ],
              borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                // 'rgba(255, 206, 86, 1)',
                // 'rgba(75, 192, 192, 1)',
                // 'rgba(153, 102, 255, 1)',
                // 'rgba(255, 159, 64, 1)',
              ],
              borderWidth: 1,
            },
            //  {
            //    label: 'Quantity',
            //    data: [47, 52, 67, 58, 9, 50],
            //    backgroundColor: 'orange',
            //    borderColor: 'red',
            // },
          ],
        }}
        height={400}
        width={600}
        options={{
          maintainAspectRatio: false,
          scales: {
            yAxes: [
              {
                ticks: {
                  beginAtZero: true,
                },
              },
            ],
          },
          legend: {
            labels: {
              fontSize: 25,
            },
          },
        }}
      />
    </Grid>

    <Divider variant="middle" />

    <Grid item xs={12}>
      <Card>
        <Button variant="contained" color="secondary" size="large">
          Ophtalmology Diseases
        </Button>
      </Card>
    </Grid>
    <Grid item xs={4}>
      <Card>
        <Button>Sorted by Existence</Button>
      </Card>
    </Grid>
    <Grid item xs={4}>
      <Card>
        <Button>Sorted by Level</Button>
      </Card>
    </Grid>
    <Grid item xs={4}>
      <Card>
        <Button>Sorted by Sex</Button>
      </Card>
    </Grid>
    <Grid item xs={4}>
      <Doughnut
        data={{
          labels: ['Ill', 'Sane'],
          datasets: [
            {
              label: '# of votes',
              data: [12, 29],
              backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                // 'rgba(255, 206, 86, 0.2)',
                // 'rgba(75, 192, 192, 0.2)',
                // 'rgba(153, 102, 255, 0.2)',
                // 'rgba(255, 159, 64, 0.2)',
              ],
              borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                // 'rgba(255, 206, 86, 1)',
                // 'rgba(75, 192, 192, 1)',
                // 'rgba(153, 102, 255, 1)',
                // 'rgba(255, 159, 64, 1)',
              ],
              borderWidth: 1,
            },
            // {
            //   label: 'Quantity',
            //   data: [47, 52, 67, 58, 9, 50],
            //   backgroundColor: 'orange',
            //   borderColor: 'red',
            // },
          ],
        }}
        height={400}
        width={600}
        options={{
          maintainAspectRatio: false,
          scales: {
            yAxes: [
              {
                ticks: {
                  beginAtZero: true,
                },
              },
            ],
          },
          legend: {
            labels: {
              fontSize: 25,
            },
          },
        }}
      />
    </Grid>

    <Grid item xs={4}>
      <Bar
        height={400}
        width={600}
        data={{
          labels: ['1CP', '2CP', '1CS', '2CS', '3CS', 'Teachers'],
          datasets: [
            {
              label: 'Sorted by Level',
              data: [40, 22, 3, 15, 20, 22],
              backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)',
              ],
              borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)',
              ],
              borderWidth: 1,
            },
          ],
        }}
        options={{
          maintainAspectRatio: false,
          scales: {
            yAxes: [
              {
                ticks: {
                  beginAtZero: true,
                },
              },
            ],
          },
          legend: {
            labels: {
              fontSize: 25,
            },
          },
        }}
      />
    </Grid>
    <Grid item xs={4}>
      <Pie
        data={{
          labels: ['Women', 'Men'],
          datasets: [
            {
              label: 'Sorted by Percentage',
              data: [12, 19],
              backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                // 'rgba(255, 206, 86, 0.2)',
                // 'rgba(75, 192, 192, 0.2)',
                // 'rgba(153, 102, 255, 0.2)',
                // 'rgba(255, 159, 64, 0.2)',
              ],
              borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                // 'rgba(255, 206, 86, 1)',
                // 'rgba(75, 192, 192, 1)',
                // 'rgba(153, 102, 255, 1)',
                // 'rgba(255, 159, 64, 1)',
              ],
              borderWidth: 1,
            },
            //  {
            //    label: 'Quantity',
            //    data: [47, 52, 67, 58, 9, 50],
            //    backgroundColor: 'orange',
            //    borderColor: 'red',
            // },
          ],
        }}
        height={400}
        width={600}
        options={{
          maintainAspectRatio: false,
          scales: {
            yAxes: [
              {
                ticks: {
                  beginAtZero: true,
                },
              },
            ],
          },
          legend: {
            labels: {
              fontSize: 25,
            },
          },
        }}
      />
    </Grid>

    <Grid item xs={1} />
    <Grid item xs={11}>
      <Card>
        <Button variant="contained" color="primary" size="large">
          Diseases
        </Button>
      </Card>
    </Grid>
    <Grid item xs={1} />
    <Grid item xs={12}>
      <Card>
        <Button variant="contained" color="secondary" size="large">
          Covid-19
        </Button>
      </Card>
    </Grid>
    <Grid item xs={4}>
      <Card>
        <Button>Sorted by Existence</Button>
      </Card>
    </Grid>
    <Grid item xs={4}>
      <Card>
        <Button>Sorted by Level</Button>
      </Card>
    </Grid>
    <Grid item xs={4}>
      <Card>
        <Button>Sorted by Sex</Button>
      </Card>
    </Grid>
    <Grid item xs={4}>
      <Doughnut
        data={{
          labels: ['Ill', 'Sane'],
          datasets: [
            {
              label: '# of votes',
              data: [12, 29],
              backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                // 'rgba(255, 206, 86, 0.2)',
                // 'rgba(75, 192, 192, 0.2)',
                // 'rgba(153, 102, 255, 0.2)',
                // 'rgba(255, 159, 64, 0.2)',
              ],
              borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                // 'rgba(255, 206, 86, 1)',
                // 'rgba(75, 192, 192, 1)',
                // 'rgba(153, 102, 255, 1)',
                // 'rgba(255, 159, 64, 1)',
              ],
              borderWidth: 1,
            },
            // {
            //   label: 'Quantity',
            //   data: [47, 52, 67, 58, 9, 50],
            //   backgroundColor: 'orange',
            //   borderColor: 'red',
            // },
          ],
        }}
        height={400}
        width={600}
        options={{
          maintainAspectRatio: false,
          scales: {
            yAxes: [
              {
                ticks: {
                  beginAtZero: true,
                },
              },
            ],
          },
          legend: {
            labels: {
              fontSize: 25,
            },
          },
        }}
      />
    </Grid>

    <Grid item xs={4}>
      <Bar
        height={400}
        width={600}
        data={{
          labels: ['1CP', '2CP', '1CS', '2CS', '3CS', 'Teachers'],
          datasets: [
            {
              label: 'Sorted by Level',
              data: [40, 22, 3, 15, 20, 22],
              backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)',
              ],
              borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)',
              ],
              borderWidth: 1,
            },
          ],
        }}
        options={{
          maintainAspectRatio: false,
          scales: {
            yAxes: [
              {
                ticks: {
                  beginAtZero: true,
                },
              },
            ],
          },
          legend: {
            labels: {
              fontSize: 25,
            },
          },
        }}
      />
    </Grid>
    <Grid item xs={4}>
      <Pie
        data={{
          labels: ['Women', 'Men'],
          datasets: [
            {
              label: 'Sorted by Percentage',
              data: [12, 19],
              backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                // 'rgba(255, 206, 86, 0.2)',
                // 'rgba(75, 192, 192, 0.2)',
                // 'rgba(153, 102, 255, 0.2)',
                // 'rgba(255, 159, 64, 0.2)',
              ],
              borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                // 'rgba(255, 206, 86, 1)',
                // 'rgba(75, 192, 192, 1)',
                // 'rgba(153, 102, 255, 1)',
                // 'rgba(255, 159, 64, 1)',
              ],
              borderWidth: 1,
            },
            //  {
            //    label: 'Quantity',
            //    data: [47, 52, 67, 58, 9, 50],
            //    backgroundColor: 'orange',
            //    borderColor: 'red',
            // },
          ],
        }}
        height={400}
        width={600}
        options={{
          maintainAspectRatio: false,
          scales: {
            yAxes: [
              {
                ticks: {
                  beginAtZero: true,
                },
              },
            ],
          },
          legend: {
            labels: {
              fontSize: 25,
            },
          },
        }}
      />
    </Grid>

    <Grid item xs={6}>
      <Card>
        <Button>Vaccinated</Button>
      </Card>
    </Grid>

    <Grid item xs={6}>
      <Card>
        <Button>Hospitalised</Button>
      </Card>
    </Grid>
    <Grid item xs={6}>
      <Doughnut
        data={{
          labels: ['Not Vaccinated', 'Vaccinated'],
          datasets: [
            {
              label: '# of votes',
              data: [12, 29],
              backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                // 'rgba(255, 206, 86, 0.2)',
                // 'rgba(75, 192, 192, 0.2)',
                // 'rgba(153, 102, 255, 0.2)',
                // 'rgba(255, 159, 64, 0.2)',
              ],
              borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                // 'rgba(255, 206, 86, 1)',
                // 'rgba(75, 192, 192, 1)',
                // 'rgba(153, 102, 255, 1)',
                // 'rgba(255, 159, 64, 1)',
              ],
              borderWidth: 1,
            },
            // {
            //   label: 'Quantity',
            //   data: [47, 52, 67, 58, 9, 50],
            //   backgroundColor: 'orange',
            //   borderColor: 'red',
            // },
          ],
        }}
        height={400}
        width={600}
        options={{
          maintainAspectRatio: false,
          scales: {
            yAxes: [
              {
                ticks: {
                  beginAtZero: true,
                },
              },
            ],
          },
          legend: {
            labels: {
              fontSize: 25,
            },
          },
        }}
      />
    </Grid>

    <Grid item xs={6}>
      <Pie
        data={{
          labels: ['Hospitalised', 'Not Hospitalised'],
          datasets: [
            {
              label: 'Sorted by Percentage',
              data: [12, 19],
              backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                // 'rgba(255, 206, 86, 0.2)',
                // 'rgba(75, 192, 192, 0.2)',
                // 'rgba(153, 102, 255, 0.2)',
                // 'rgba(255, 159, 64, 0.2)',
              ],
              borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                // 'rgba(255, 206, 86, 1)',
                // 'rgba(75, 192, 192, 1)',
                // 'rgba(153, 102, 255, 1)',
                // 'rgba(255, 159, 64, 1)',
              ],
              borderWidth: 1,
            },
            //  {
            //    label: 'Quantity',
            //    data: [47, 52, 67, 58, 9, 50],
            //    backgroundColor: 'orange',
            //    borderColor: 'red',
            // },
          ],
        }}
        height={400}
        width={600}
        options={{
          maintainAspectRatio: false,
          scales: {
            yAxes: [
              {
                ticks: {
                  beginAtZero: true,
                },
              },
            ],
          },
          legend: {
            labels: {
              fontSize: 25,
            },
          },
        }}
      />
    </Grid>
  </Grid>
);

export default Statistics;
