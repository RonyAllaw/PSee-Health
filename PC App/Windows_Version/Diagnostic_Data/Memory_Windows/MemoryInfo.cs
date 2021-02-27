using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Management;
using System.Diagnostics;
using System.IO;
namespace Memory_Windows
{
    public class MemoryInfo
    {
        private ManagementObjectSearcher wmiObject;
        private dynamic memoryValues;
        private dynamic RamUsagePercentage;
        public MemoryInfo()
        {
            WmiObject = new ManagementObjectSearcher("select * from Win32_OperatingSystem"); //creates a WMI object that contains multiple management objects
            RamUsagePercentage = updateMemoryUsage();

            MemoryValues = WmiObject.Get().Cast<ManagementObject>().Select(mo => new
            {
                FreePhysicalMemory = Double.Parse(mo["FreePhysicalMemory"].ToString()),
                TotalVisibleMemorySize = Double.Parse(mo["TotalVisibleMemorySize"].ToString())
            }).FirstOrDefault(); //assigns memoryvalues to an object containing doubles indicating The free memory and the total usable memory in the system


        }

        public ManagementObjectSearcher WmiObject { get => wmiObject; set => wmiObject = value; }
        public dynamic MemoryValues { get => memoryValues; set => memoryValues = value; }

        public dynamic updateMemoryUsage()
        { //prints a percentage showing memory usage(Ram usage)
            if (MemoryValues != null)
            {
                RamUsagePercentage = ((MemoryValues.TotalVisibleMemorySize - MemoryValues.FreePhysicalMemory) / MemoryValues.TotalVisibleMemorySize) * 100; //calculates the percentage of memory used in the system.
            }
            return RamUsagePercentage;
        }
    }
}