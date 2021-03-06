using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Cryptography;
using System.Text;
using System.Threading.Tasks;
using CommonModels;
using Database.DatabaseModels;

namespace Services
{
    public static class ModelCreation
    {
        public static string GenerateRandomString()
        {
            var rng = new RNGCryptoServiceProvider();
            var buff = new byte[5];
            rng.GetBytes(buff);
            return Convert.ToBase64String(buff);
        }

        public static LastMinute CreateOrUpdateLastMinute(DiagnosticData diagnosticData, LastMinute lastMinute = null)
        {
            lastMinute ??= new LastMinute();
            lastMinute.PcId = diagnosticData.PcId;
            lastMinute.Second = diagnosticData.CurrentSecond;
            lastMinute.PcCpuUsage = diagnosticData.CpuUsage;
            lastMinute.PcMemoryUsage = diagnosticData.MemoryUsage;
            lastMinute.PcNetworkAverageBytesReceived = diagnosticData.AvgNetworkBytesReceived;
            lastMinute.PcNetworkAverageBytesSend = diagnosticData.AvgNetworkBytesSent;
            lastMinute.TimeChanged = DateTime.UtcNow;
            return lastMinute;
        }

        public static Pc CreatePc(DiagnosticData diagnosticData)
        {
            var newPc = new Pc()
            {
                //AdminCredentialsUsername = diagnosticData.AdminUsername,
                PcCpuUsage = diagnosticData.CpuUsage,
                PcDiskTotalFreeSpace = diagnosticData.TotalFreeDiskSpace,
                PcDiskTotalSpace = diagnosticData.DiskTotalSpace,
                PcFirewallStatus = diagnosticData.FirewallStatus,
                PcId = diagnosticData.PcId,
                PcMemoryUsage = diagnosticData.MemoryUsage,
                PcNetworkAverageBytesReceived = diagnosticData.AvgNetworkBytesReceived,
                PcNetworkAverageBytesSend = diagnosticData.AvgNetworkBytesSent,
                PcOs = diagnosticData.Os,
                PcUsername = diagnosticData.PcConfiguration.PcUsername,
                PcEmail = diagnosticData.PcConfiguration.PcEmail
            };
            return newPc;
        }
    }
}
