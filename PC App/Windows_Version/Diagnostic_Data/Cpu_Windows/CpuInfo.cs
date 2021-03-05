using System;
using System.Diagnostics;
namespace Cpu_Windows
{
    public static class CpuInfo
    {
        /// <summary>
        /// Getter for the updated Cpu Percentage
        /// </summary>
        public static float CpuPercentage { get => updateCpuUsage(); }

        private static float updateCpuUsage()//returns CpuPercentage
        {
            PerformanceCounter cpuCounter = new PerformanceCounter();//creates a Performance Counter object that indicates how much processing power is used
            cpuCounter.CategoryName = "Processor";
            cpuCounter.CounterName = "% Processor Time";
            cpuCounter.InstanceName = "_Total";
            float firstValue = cpuCounter.NextValue();
            System.Threading.Thread.Sleep(500);
            // now matches task manager reading
            float currentValue = cpuCounter.NextValue();
            return currentValue;
        }
    }
}