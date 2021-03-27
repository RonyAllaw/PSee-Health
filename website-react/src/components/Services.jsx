import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

function Update() {
    let url = 'https://pchealth.azurewebsites.net/api/Base/GetDiagnosticData';

    var xhReq = new XMLHttpRequest();
    xhReq.open("GET", url, false);
    xhReq.send(null);
    return JSON.parse(xhReq.responseText);
}



const datalst2 = [{"CpuUsage":2.6723764,"TotalFreeDiskSpace":804.10864,"DiskTotalSpace":998.3052,"MemoryUsage":44.097011535054776,"AvgNetworkBytesSent":17100395,"AvgNetworkBytesReceived":69788753,"PC_ID":"GC4AfW43BT2T21VTQKgo4lGLYuuhLqg9srdwXwSTFWE","OS":"Windows","Services":[{"Item1":"AdobeARMservice","Item2":"Running"},{"Item1":"AJRouter","Item2":"Stopped"},{"Item1":"ALG","Item2":"Stopped"},{"Item1":"ApHidMonitorService","Item2":"Running"},{"Item1":"AppIDSvc","Item2":"Stopped"},{"Item1":"Appinfo","Item2":"Running"},{"Item1":"AppReadiness","Item2":"Stopped"},{"Item1":"AppXSvc","Item2":"Running"},{"Item1":"aspnet_state","Item2":"Stopped"},{"Item1":"AudioEndpointBuilder","Item2":"Running"},{"Item1":"Audiosrv","Item2":"Running"},{"Item1":"autotimesvc","Item2":"Stopped"},{"Item1":"AxInstSV","Item2":"Stopped"},{"Item1":"BDESVC","Item2":"Stopped"},{"Item1":"BFE","Item2":"Running"},{"Item1":"BITS","Item2":"Running"},{"Item1":"BrokerInfrastructure","Item2":"Running"},{"Item1":"BTAGService","Item2":"Stopped"},{"Item1":"BthAvctpSvc","Item2":"Running"},{"Item1":"bthserv","Item2":"Stopped"},{"Item1":"camsvc","Item2":"Running"},{"Item1":"CDPSvc","Item2":"Running"},{"Item1":"CertPropSvc","Item2":"Running"},{"Item1":"ClickToRunSvc","Item2":"Running"},{"Item1":"ClipSVC","Item2":"Stopped"},{"Item1":"COMSysApp","Item2":"Stopped"},{"Item1":"CoreMessagingRegistrar","Item2":"Running"},{"Item1":"cphs","Item2":"Running"},{"Item1":"cplspcon","Item2":"Running"},{"Item1":"CryptSvc","Item2":"Running"},{"Item1":"dbupdate","Item2":"Stopped"},{"Item1":"dbupdatem","Item2":"Stopped"},{"Item1":"DbxSvc","Item2":"Running"},{"Item1":"DcomLaunch","Item2":"Running"},{"Item1":"dcpm-notify","Item2":"Stopped"},{"Item1":"defragsvc","Item2":"Stopped"},{"Item1":"Dell Digital Delivery Services","Item2":"Running"},{"Item1":"Dell.CommandPowerManager.Service","Item2":"Stopped"},{"Item1":"DellClientManagementService","Item2":"Running"},{"Item1":"DellFFDPWmiService","Item2":"Running"},{"Item1":"DeviceAssociationService","Item2":"Running"},{"Item1":"DeviceInstall","Item2":"Stopped"},{"Item1":"DevQueryBroker","Item2":"Running"},{"Item1":"Dhcp","Item2":"Running"},{"Item1":"diagnosticshub.standardcollector.service","Item2":"Stopped"},{"Item1":"diagsvc","Item2":"Stopped"},{"Item1":"DiagTrack","Item2":"Running"},{"Item1":"DispBrokerDesktopSvc","Item2":"Running"},{"Item1":"DisplayEnhancementService","Item2":"Running"},{"Item1":"DmEnrollmentSvc","Item2":"Stopped"},{"Item1":"dmwappushservice","Item2":"Stopped"},{"Item1":"Dnscache","Item2":"Running"},{"Item1":"DoSvc","Item2":"Running"},{"Item1":"dot3svc","Item2":"Stopped"},{"Item1":"DPS","Item2":"Running"},{"Item1":"DsmSvc","Item2":"Stopped"},{"Item1":"DsSvc","Item2":"Stopped"},{"Item1":"DusmSvc","Item2":"Running"},{"Item1":"Eaphost","Item2":"Stopped"},{"Item1":"edgeupdate","Item2":"Stopped"},{"Item1":"edgeupdatem","Item2":"Stopped"},{"Item1":"EFS","Item2":"Running"},{"Item1":"embeddedmode","Item2":"Stopped"},{"Item1":"EntAppSvc","Item2":"Stopped"},{"Item1":"esifsvc","Item2":"Running"},{"Item1":"EventLog","Item2":"Running"},{"Item1":"EventSystem","Item2":"Running"},{"Item1":"EvtEng","Item2":"Running"},{"Item1":"Fax","Item2":"Stopped"},{"Item1":"fdPHost","Item2":"Stopped"},{"Item1":"FDResPub","Item2":"Stopped"},{"Item1":"fhsvc","Item2":"Stopped"},{"Item1":"FontCache","Item2":"Running"},{"Item1":"FontCache3.0.0.0","Item2":"Running"},{"Item1":"FrameServer","Item2":"Stopped"},{"Item1":"GoogleChromeElevationService","Item2":"Stopped"},{"Item1":"gpsvc","Item2":"Stopped"},{"Item1":"GraphicsPerfSvc","Item2":"Stopped"},{"Item1":"gupdate","Item2":"Stopped"},{"Item1":"gupdatem","Item2":"Stopped"},{"Item1":"HfcDisableService","Item2":"Stopped"},{"Item1":"hidserv","Item2":"Running"},{"Item1":"hostcontrolsvc","Item2":"Running"},{"Item1":"hoststoragesvc","Item2":"Running"},{"Item1":"HvHost","Item2":"Stopped"},{"Item1":"iaStorAfsService","Item2":"Stopped"},{"Item1":"icssvc","Item2":"Stopped"},{"Item1":"igfxCUIService2.0.0.0","Item2":"Running"},{"Item1":"IKEEXT","Item2":"Stopped"},{"Item1":"InstallService","Item2":"Running"},{"Item1":"Intel(R) Capability Licensing Service TCP IP Interface","Item2":"Stopped"},{"Item1":"Intel(R) TPM Provisioning Service","Item2":"Stopped"},{"Item1":"IntelAudioService","Item2":"Stopped"},{"Item1":"iphlpsvc","Item2":"Running"},{"Item1":"IpxlatCfgSvc","Item2":"Stopped"},{"Item1":"jhi_service","Item2":"Running"},{"Item1":"KeyIso","Item2":"Running"},{"Item1":"KtmRm","Item2":"Stopped"},{"Item1":"LanmanServer","Item2":"Running"},{"Item1":"LanmanWorkstation","Item2":"Running"},{"Item1":"lfsvc","Item2":"Running"},{"Item1":"LicenseManager","Item2":"Running"},{"Item1":"lltdsvc","Item2":"Stopped"},{"Item1":"lmhosts","Item2":"Running"},{"Item1":"LMS","Item2":"Running"},{"Item1":"LSM","Item2":"Running"},{"Item1":"LxpSvc","Item2":"Stopped"},{"Item1":"MapsBroker","Item2":"Stopped"},{"Item1":"MicrosoftEdgeElevationService","Item2":"Stopped"},{"Item1":"MixedRealityOpenXRSvc","Item2":"Stopped"},{"Item1":"mpssvc","Item2":"Running"},{"Item1":"MSDTC","Item2":"Stopped"},{"Item1":"MSiSCSI","Item2":"Stopped"},{"Item1":"msiserver","Item2":"Stopped"},{"Item1":"MySQL80","Item2":"Running"},{"Item1":"NaturalAuthentication","Item2":"Stopped"},{"Item1":"NcaSvc","Item2":"Stopped"},{"Item1":"NcbService","Item2":"Running"},{"Item1":"NcdAutoSetup","Item2":"Stopped"},{"Item1":"Netlogon","Item2":"Stopped"},{"Item1":"Netman","Item2":"Stopped"},{"Item1":"netprofm","Item2":"Running"},{"Item1":"NetSetupSvc","Item2":"Stopped"},{"Item1":"NetTcpPortSharing","Item2":"Stopped"},{"Item1":"NgcCtnrSvc","Item2":"Running"},{"Item1":"NgcSvc","Item2":"Running"},{"Item1":"NlaSvc","Item2":"Running"},{"Item1":"nsi","Item2":"Running"},{"Item1":"ose64","Item2":"Stopped"},{"Item1":"p2pimsvc","Item2":"Stopped"},{"Item1":"p2psvc","Item2":"Stopped"},{"Item1":"PcaSvc","Item2":"Running"},{"Item1":"perceptionsimulation","Item2":"Stopped"},{"Item1":"PerfHost","Item2":"Stopped"},{"Item1":"PhoneSvc","Item2":"Stopped"},{"Item1":"pla","Item2":"Stopped"},{"Item1":"PlugPlay","Item2":"Running"},{"Item1":"PNRPAutoReg","Item2":"Stopped"},{"Item1":"PNRPsvc","Item2":"Stopped"},{"Item1":"PolicyAgent","Item2":"Running"},{"Item1":"Power","Item2":"Running"},{"Item1":"PrintNotify","Item2":"Stopped"},{"Item1":"ProfSvc","Item2":"Running"},{"Item1":"PushToInstall","Item2":"Stopped"},{"Item1":"QWAVE","Item2":"Running"},{"Item1":"RasAuto","Item2":"Stopped"},{"Item1":"RasMan","Item2":"Running"},{"Item1":"RemoteAccess","Item2":"Stopped"},{"Item1":"RemoteRegistry","Item2":"Stopped"},{"Item1":"RetailDemo","Item2":"Stopped"},{"Item1":"RmSvc","Item2":"Running"},{"Item1":"RpcEptMapper","Item2":"Running"},{"Item1":"RpcLocator","Item2":"Stopped"},{"Item1":"RpcSs","Item2":"Running"},{"Item1":"RstMwService","Item2":"Running"},{"Item1":"RtkAudioService","Item2":"Running"},{"Item1":"SamSs","Item2":"Running"},{"Item1":"SCardSvr","Item2":"Running"},{"Item1":"ScDeviceEnum","Item2":"Stopped"},{"Item1":"Schedule","Item2":"Running"},{"Item1":"SCPolicySvc","Item2":"Stopped"},{"Item1":"SDRSVC","Item2":"Stopped"},{"Item1":"seclogon","Item2":"Stopped"},{"Item1":"SecurityHealthService","Item2":"Running"},{"Item1":"SEMgrSvc","Item2":"Stopped"},{"Item1":"SENS","Item2":"Running"},{"Item1":"SensorDataService","Item2":"Stopped"},{"Item1":"SensorService","Item2":"Stopped"},{"Item1":"SensrSvc","Item2":"Stopped"},{"Item1":"SessionEnv","Item2":"Stopped"},{"Item1":"SgrmBroker","Item2":"Running"},{"Item1":"SharedAccess","Item2":"Stopped"},{"Item1":"SharedRealitySvc","Item2":"Stopped"},{"Item1":"ShellHWDetection","Item2":"Running"},{"Item1":"shpamsvc","Item2":"Stopped"},{"Item1":"smphost","Item2":"Stopped"},{"Item1":"SmsRouter","Item2":"Stopped"},{"Item1":"SNMPTRAP","Item2":"Stopped"},{"Item1":"spectrum","Item2":"Stopped"},{"Item1":"Spooler","Item2":"Running"},{"Item1":"sppsvc","Item2":"Stopped"},{"Item1":"SQLWriter","Item2":"Running"},{"Item1":"SSDPSRV","Item2":"Running"},{"Item1":"ssh-agent","Item2":"Stopped"},{"Item1":"SstpSvc","Item2":"Running"},{"Item1":"StateRepository","Item2":"Running"},{"Item1":"Steam Client Service","Item2":"Stopped"},{"Item1":"stisvc","Item2":"Stopped"},{"Item1":"StorSvc","Item2":"Running"},{"Item1":"svsvc","Item2":"Stopped"},{"Item1":"swprv","Item2":"Stopped"},{"Item1":"SysMain","Item2":"Running"},{"Item1":"SystemEventsBroker","Item2":"Running"},{"Item1":"TabletInputService","Item2":"Running"},{"Item1":"TapiSrv","Item2":"Stopped"},{"Item1":"TermService","Item2":"Stopped"},{"Item1":"Themes","Item2":"Running"},{"Item1":"TieringEngineService","Item2":"Stopped"},{"Item1":"TimeBrokerSvc","Item2":"Running"},{"Item1":"TokenBroker","Item2":"Running"},{"Item1":"TrkWks","Item2":"Running"},{"Item1":"TroubleshootingSvc","Item2":"Stopped"},{"Item1":"TrustedInstaller","Item2":"Stopped"},{"Item1":"tzautoupdate","Item2":"Stopped"},{"Item1":"UmRdpService","Item2":"Stopped"},{"Item1":"upnphost","Item2":"Stopped"},{"Item1":"UserManager","Item2":"Running"},{"Item1":"ushupgradesvc","Item2":"Running"},{"Item1":"UsoSvc","Item2":"Running"},{"Item1":"VacSvc","Item2":"Stopped"},{"Item1":"VaultSvc","Item2":"Running"},{"Item1":"vds","Item2":"Stopped"},{"Item1":"vmicguestinterface","Item2":"Stopped"},{"Item1":"vmicheartbeat","Item2":"Stopped"},{"Item1":"vmickvpexchange","Item2":"Stopped"},{"Item1":"vmicrdv","Item2":"Stopped"},{"Item1":"vmicshutdown","Item2":"Stopped"},{"Item1":"vmictimesync","Item2":"Stopped"},{"Item1":"vmicvmsession","Item2":"Stopped"},{"Item1":"vmicvss","Item2":"Stopped"},{"Item1":"VSS","Item2":"Stopped"},{"Item1":"VSStandardCollectorService150","Item2":"Stopped"},{"Item1":"W32Time","Item2":"Stopped"},{"Item1":"WaaSMedicSvc","Item2":"Stopped"},{"Item1":"WalletService","Item2":"Stopped"},{"Item1":"wampapache64","Item2":"Stopped"},{"Item1":"wampmariadb64","Item2":"Stopped"},{"Item1":"wampmysqld64","Item2":"Stopped"},{"Item1":"WarpJITSvc","Item2":"Stopped"},{"Item1":"WavesSysSvc","Item2":"Running"},{"Item1":"wbengine","Item2":"Stopped"},{"Item1":"WbioSrvc","Item2":"Running"},{"Item1":"Wcmsvc","Item2":"Running"},{"Item1":"wcncsvc","Item2":"Stopped"},{"Item1":"WdiServiceHost","Item2":"Running"},{"Item1":"WdiSystemHost","Item2":"Running"},{"Item1":"WdNisSvc","Item2":"Running"},{"Item1":"WebClient","Item2":"Stopped"},{"Item1":"Wecsvc","Item2":"Stopped"},{"Item1":"WEPHOSTSVC","Item2":"Stopped"},{"Item1":"wercplsupport","Item2":"Stopped"},{"Item1":"WerSvc","Item2":"Stopped"},{"Item1":"WFDSConMgrSvc","Item2":"Stopped"},{"Item1":"WiaRpc","Item2":"Stopped"},{"Item1":"WinDefend","Item2":"Running"},{"Item1":"WinHttpAutoProxySvc","Item2":"Running"},{"Item1":"Winmgmt","Item2":"Running"},{"Item1":"WinRM","Item2":"Stopped"},{"Item1":"wisvc","Item2":"Stopped"},{"Item1":"WlanSvc","Item2":"Running"},{"Item1":"wlidsvc","Item2":"Stopped"},{"Item1":"wlpasvc","Item2":"Stopped"},{"Item1":"WManSvc","Item2":"Stopped"},{"Item1":"wmiApSrv","Item2":"Stopped"},{"Item1":"WMPNetworkSvc","Item2":"Stopped"},{"Item1":"workfolderssvc","Item2":"Stopped"},{"Item1":"WpcMonSvc","Item2":"Stopped"},{"Item1":"WPDBusEnum","Item2":"Stopped"},{"Item1":"WpnService","Item2":"Running"},{"Item1":"wscsvc","Item2":"Running"},{"Item1":"WSearch","Item2":"Running"},{"Item1":"wuauserv","Item2":"Running"},{"Item1":"WwanSvc","Item2":"Stopped"},{"Item1":"XblAuthManager","Item2":"Stopped"},{"Item1":"XblGameSave","Item2":"Stopped"},{"Item1":"XboxGipSvc","Item2":"Stopped"},{"Item1":"XboxNetApiSvc","Item2":"Stopped"},{"Item1":"ZeroConfigService","Item2":"Running"},{"Item1":"AarSvc_82727","Item2":"Stopped"},{"Item1":"BcastDVRUserService_82727","Item2":"Stopped"},{"Item1":"BluetoothUserService_82727","Item2":"Stopped"},{"Item1":"CaptureService_82727","Item2":"Stopped"},{"Item1":"cbdhsvc_82727","Item2":"Running"},{"Item1":"CDPUserSvc_82727","Item2":"Running"},{"Item1":"ConsentUxUserSvc_82727","Item2":"Stopped"},{"Item1":"CredentialEnrollmentManagerUserSvc_82727","Item2":"Stopped"},{"Item1":"DeviceAssociationBrokerSvc_82727","Item2":"Stopped"},{"Item1":"DevicePickerUserSvc_82727","Item2":"Stopped"},{"Item1":"DevicesFlowUserSvc_82727","Item2":"Stopped"},{"Item1":"MessagingService_82727","Item2":"Stopped"},{"Item1":"OneSyncSvc_82727","Item2":"Running"},{"Item1":"PimIndexMaintenanceSvc_82727","Item2":"Running"},{"Item1":"PrintWorkflowUserSvc_82727","Item2":"Stopped"},{"Item1":"UdkUserSvc_82727","Item2":"Stopped"},{"Item1":"UnistoreSvc_82727","Item2":"Running"},{"Item1":"UserDataSvc_82727","Item2":"Running"},{"Item1":"WpnUserService_82727","Item2":"Running"}],"FirewallStatus":"Active"}
]// }
function Services({match}) {
    const [datalst, setdatalst] = useState([])
     useEffect(() => {
        datalst.map((x) =>
            <tr key={x.PC_ID}>
                {/* <td>{x.PC_ID}</td> */}
                <td>{x.Services}</td>
            </tr>
        )
    },[]);
   let updateCycle
    useEffect(() => {
        updateCycle = setInterval(() => setdatalst(Update), 1000) // Set a timer as a side effect
        return () => clearInterval(updateCycle) // Here is the cleanup function: we take down the timer
    }, [])
    return (<table className="table table-border">
        <thead>
            <tr className="header">
                <th onclick="sortByColumn('PC_ID')">Username</th>
                <th onclick="sortByColumn('OS')">OS</th>
            </tr>
            {/* <button onClick={()=>setdatalst(Update())}></button> */}
        </thead>
        <tbody id="tableData">
            {datalst2.map((x) => {
                const arr = x.Services;
                arr.map(service =>
                    <tr key={x.PC_ID}>
                        <td>{service[0]}</td>
                    </tr>
                    
                    )
            }
            )}
        </tbody>
    </table>)
}

export default Services