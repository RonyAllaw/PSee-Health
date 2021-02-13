using System;
using System.Diagnostics;
namespace Network_Windows
{
    public class NetworkInfo
    {
        private PerformanceCounter bandwidthCounter; //creates a performance counter for network interface to monitor current bandwith
        private float bandwidth = 0;//sets bandwith value to 0
        private PerformanceCounter dataSentCounter; //creates a performance counter for network interface to monitor data sent
        private PerformanceCounter dataReceivedCounter;////creates a performance counter for network interface to monitor data received
        private double NetworkTrafficPercentage;
        private String[] models;
        public PerformanceCounter BandwidthCounter { get => bandwidthCounter; set => bandwidthCounter = value; }
        public float Bandwidth { get => bandwidth; set => bandwidth = value; }
        public PerformanceCounter DataSentCounter { get => dataSentCounter; set => dataSentCounter = value; }
        public PerformanceCounter DataReceivedCounter { get => dataReceivedCounter; set => dataReceivedCounter = value; }
        public double NetworkTrafficPercentage1 { get => NetworkTrafficPercentage; set => NetworkTrafficPercentage = value; }
        public string[] Models { get => models; set => models = value; }

        public NetworkInfo()
        {
            bandwidthCounter = new PerformanceCounter();
            bandwidth = 0;
            dataSentCounter = new PerformanceCounter();
            dataReceivedCounter = new PerformanceCounter();
            BandwidthCounter.CategoryName = "Network Interface";
            BandwidthCounter.CounterName = "Current Bandwith";
            DataSentCounter.CategoryName = "Network Interface";
            DataSentCounter.CounterName = "Bytes Sent/sec";
            DataReceivedCounter.CategoryName = "Network Interface";
            DataReceivedCounter.CounterName = "Bytes Received/sec";
            NetworkTrafficPercentage1 = 0;
             PerformanceCounterCategory category = new PerformanceCounterCategory("Network Interface"); //creates a category object representing the network interface
            Models = category.GetInstanceNames(); //array that has the models of network devices
            
        }

        public void printNetworkUsage() //prints a percentage showing network traffic
        {
           
            foreach (String model in Models) //this for loop sets the model for each counter and prints the network usage for each model
            {
                BandwidthCounter.InstanceName = model;
                Bandwidth = BandwidthCounter.NextValue(); //sets bandwith to bandwidth counter's value
                DataSentCounter.InstanceName = model;
                DataReceivedCounter.InstanceName = model;
                float datasent = DataSentCounter.NextValue(); //sets datasent to datasentCounter's value
                float datareceived = DataReceivedCounter.NextValue(); //sets data received to dataReceived's value
                if (Bandwidth != 0)
                {
                    double utilization = (8 * (datasent + datareceived)) / Bandwidth * 100; // calculates the percentage of network traffic
                    Console.WriteLine("Traffic utilization percentage on model : " + model + " is " + utilization + "%");
                }
            }
        }
    }
}