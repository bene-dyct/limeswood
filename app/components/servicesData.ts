export type Automation = {
  num: string;
  title: string;
  desc: string;
  bullets: string[];
  wide?: boolean;
  wideFeatures?: { title: string; desc: string }[];
  icon: string; // SVG path string
};

export type Electrical = {
  num: string;
  title: string;
  desc: string;
  bullets: string[];
  wide?: boolean;
  wideFeatures?: { title: string; desc: string }[];
  icon: string; // SVG path string
};

export type Mechanical = {
  num: string;
  title: string;
  desc: string;
  bullets: string[];
  wide?: boolean;
  wideFeatures?: { title: string; desc: string }[];
  icon: string; // SVG path string
};

export type Instrumentation = {
  num: string;
  title: string;
  desc: string;
  bullets: string[];
  wide?: boolean;
  wideFeatures?: { title: string; desc: string }[];
  icon: string; // SVG path string
};

export type Manpower = {
  num: string;
  title: string;
  desc: string;
  bullets: string[];
  wide?: boolean;
  wideFeatures?: { title: string; desc: string }[];
  icon: string; // SVG path string
};

export const automation: Automation[] = [
  {
    num: "01 / 07",
    title: "PLC & SCADA System Design and Integration",
    desc: "Complete lifecycle solutions for Programmable Logic Controllers and Supervisory Control and Data Acquisition systems — from design through commissioning.",
    bullets: [
      "Control panel design and fabrication",
      "PLC programming (Ladder Logic, Function Block, Structured Text)",
      "SCADA configuration and HMI development",
      "Network architecture (Ethernet/IP, Modbus, Profibus, Profinet)",
      "Redundancy and fail-safe system configuration",
      "Data logging and alarm management systems",
    ],
    icon: "M2 3h20v14a2 2 0 01-2 2H4a2 2 0 01-2-2V3zM8 21h8M12 17v4",
  },
  {
    num: "02 / 07",
    title: "Distributed Control Systems (DCS)",
    desc: "For large-scale and complex industrial operations — engineered for maximum uptime, reduced risk, and operational continuity across distributed architectures.",
    bullets: [
      "Distributed processing control architecture",
      "High availability and redundancy engineering",
      "Real-time process visualization",
      "Advanced process control (APC)",
      "Integrated safety instrumented systems (SIS)",
    ],
    icon: "M21 16V8a2 2 0 00-1-1.73l-7-4a2 2 0 00-2 0l-7 4A2 2 0 003 8v8a2 2 0 001 1.73l7 4a2 2 0 002 0l7-4A2 2 0 0021 16zM3.27 6.96L12 12.01 20.73 6.96M12 22.08V12",
  },
  {
    num: "03 / 07",
    title: "Industrial Robotics & Motion Control",
    desc: "Integration of robotic and motion control systems to automate repetitive, hazardous, or precision-dependent tasks — increasing accuracy and reducing human risk.",
    bullets: [
      "Robotic arm configuration and commissioning",
      "Servo and VFD programming",
      "Motion synchronization and positioning systems",
      "Automated assembly and material handling",
      "Safety-rated robotic cell implementation",
    ],
    icon: "M12 2a10 10 0 100 20A10 10 0 0012 2zM12 8v4M8 12h8",
  },
  {
    num: "04 / 07",
    title: "IoT & Industrial Connectivity Solutions",
    desc: "IIoT infrastructures that enable intelligent plant operations through sensor networks, edge computing, and cloud-based monitoring platforms.",
    bullets: [
      "Sensor network integration",
      "Edge computing systems",
      "Real-time data acquisition and analytics",
      "Cloud-based monitoring platforms",
      "Predictive maintenance systems",
      "Remote diagnostics and control",
    ],
    icon: "M1 6v16l7-4 8 4 7-4V2l-7 4-8-4-7 4zM8 2v16M16 6v16",
  },
  {
    num: "05 / 07",
    title: "Process Optimization & Performance Engineering",
    desc: "Advanced control methodologies and analytical tools applied to reduce operational costs, minimize downtime, and improve overall equipment effectiveness.",
    bullets: [
      "PID tuning and loop optimization",
      "Energy efficiency analysis",
      "Bottleneck identification strategies",
      "Throughput improvement programs",
      "Automated reporting and KPI tracking",
      "Control system auditing and upgrades",
    ],
    icon: "M22 12h-4l-3 9L9 3l-3 9H2",
  },
  {
    num: "06 / 07",
    title: "Automation System Maintenance, Support & Lifecycle Management",
    desc: "We provide comprehensive post-deployment support and lifecycle management services to ensure automation systems remain reliable, secure, and optimized throughout their operational lifespan. Our services include:",
    bullets: [
      "Preventive and corrective maintenance programs",
      "Control system diagnostics and troubleshooting",
      "Software updates and firmware management",
      "System performance monitoring and health checks",
      "Spare parts management and hardware replacement planning",
      "Operator training and technical support services",
    ],
    icon: "M14.7 6.3a1 1 0 000 1.4l1.6 1.6a1 1 0 001.4 0l3.77-3.77a6 6 0 01-7.94 7.94l-6.91 6.91a2.12 2.12 0 01-3-3l6.91-6.91a6 6 0 017.94-7.94l-3.76 3.76z",
  },
  {
    num: "07 / 07",
    title: "Safety & Compliance Automation",
    desc: "Safety is integral to our automation philosophy. We implement systems engineered to align with all relevant industrial standards and regulatory frameworks.",
    bullets: [],
    wide: true,
    wideFeatures: [
      {
        title: "Safety Instrumented Systems (SIS)",
        desc: "Engineered to IEC 61511 / IEC 61508 standards for functional safety",
      },
      {
        title: "Emergency Shutdown (ESD) Systems",
        desc: "Rapid, fail-safe shutdown architectures for critical plant operations",
      },
      {
        title: "Fire & Gas Detection Integration",
        desc: "Seamless integration with plant-wide F&G detection and suppression systems",
      },
      {
        title: "SIL Assessment & Compliance",
        desc: "Safety Integrity Level verification and regulatory compliance documentation",
      },
      {
        title: "HAZOP Support",
        desc: "Hazard and operability studies to identify and mitigate process risks",
      },
      {
        title: "Regulatory Framework Alignment",
        desc: "Full compliance with industry regulations and international safety codes",
      },
    ],
    icon: "M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z",
  },
];


export const electrical: Electrical[] = [
  {
    num: "01 / 07",
    title: "Power Distribution System Design & Implementation",
    desc: "We design and deploy reliable electrical distribution networks capable of supporting complex industrial power demands, including:",
    bullets: [
      "Medium-voltage and low-voltage power distribution system design",
      "Electrical load analysis and demand forecasting",
      "Transformer sizing, installation, and integration",
      "Switchgear and motor control center (MCC) configuration",
      "Busbar systems and power routing infrastructure",
      "Cable tray routing, cable sizing, and installation design",
    ],
    icon: "M13 2L3 14h9l-1 8 10-12h-9l1-8z",
  },
  {
    num: "02 / 07",
    title: "Electrical Control Panels & Power System Integration",
    desc: "We provide comprehensive electrical panel design and integration services that enable efficient equipment control and system monitoring, including:",
    bullets: [
      "Industrial control panel design and fabrication",
      "Motor control center (MCC) engineering",
      "Power distribution boards and switchboard assembly",
      "Variable frequency drive (VFD) integration",
      "Panel testing, factory acceptance testing (FAT), and commissioning",
    ],
    icon: "M9 3H5a2 2 0 00-2 2v4m6-6h10a2 2 0 012 2v4M9 3v18m0 0h10a2 2 0 002-2v-4M9 21H5a2 2 0 01-2-2v-4m0 0h18",
  },
  {
    num: "03 / 07",
    title: "Lighting System Engineering & Energy Optimization",
    desc: "We design high-performance lighting systems that improve safety, productivity, and energy efficiency within industrial facilities, including:",
    bullets: [
      "Industrial LED lighting system design",
      "Hazardous area lighting solutions",
      "Outdoor yard and high-mast lighting systems",
      "Emergency and backup lighting integration",
      "Lighting control and automation systems",
    ],
    icon: "M9 18h6M10 22h4M12 2v1M12 6a6 6 0 016 6c0 2.22-1.21 4.16-3 5.2V19a1 1 0 01-1 1h-4a1 1 0 01-1-1v-1.8C7.21 16.16 6 14.22 6 12a6 6 0 016-6z",
  },
  {
    num: "04 / 07",
    title: "Power Quality & Electrical Protection Systems",
    desc: "Maintaining power quality is essential for protecting sensitive industrial equipment. Our engineers implement comprehensive protection systems that include:",
    bullets: [
      "Power quality analysis and harmonic mitigation",
      "Surge protection and transient voltage suppression",
      "Grounding and earthing system design",
      "Lightning protection systems",
      "Protective relay configuration and coordination",
      "Fault detection and isolation strategies",
    ],
    icon: "M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10zM9 12l2 2 4-4",
  },
  {
    num: "05 / 07",
    title: "Renewable Energy & Sustainable Power Integration",
    desc: "To support sustainable industrial development, we design renewable energy solutions that integrate seamlessly with existing power infrastructure, including",
    bullets: [
      "Solar photovoltaic (PV) system integration",
      "Hybrid power systems combining grid and renewable energy",
      "Energy storage system implementation",
      "Smart inverter configuration and grid synchronization",
      "Industrial microgrid design",
      "Energy monitoring and optimization platforms",
    ],
    icon: "M12 2a10 10 0 00-6.88 17.22M12 2a10 10 0 016.88 17.22M12 2v4m0 16v-4M4.93 7h2.12m9.9 0h2.12M4.93 17h2.12m9.9 0h2.12M8 12H4m16 0h-4",
  },
  {
    num: "06 / 07",
    title: "Electrical Safety Engineering & Regulatory Compliance",
    desc: "Electrical safety is a core component of every system we engineer. Our services ensure compliance with recognized international safety standards and operational best practices, including:",
    bullets: [
      "Electrical hazard analysis and risk assessment",
      "Arc flash studies and mitigation strategies",
      "Safety interlocking systems",
      "Emergency shutdown power systems",
      "Hazardous area electrical classification",
      "Compliance with standards such as IEC Standards, IEEE Standards, and NFPA 70",
    ],
    icon: "M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0zM12 9v4M12 17h.01",
  },
  {
    num: "07 / 07",
    title: "Electrical System Maintenance, Support & Lifecycle Management",
    desc: "We provide comprehensive post-installation support and lifecycle management services to maintain electrical system performance and reliability throughout operational life. Our services include:",
    bullets: [],
    wide: true,
    wideFeatures: [
      {
        title: "Maintenance programs",
        desc: "Structured maintenance schedules and corrective interventions ensure continuous system reliability and minimize unexpected electrical failures.",
      },
      {
        title: "Power system diagnostics",
        desc: "Advanced diagnostic testing and fault analysis identify, isolate, and resolve electrical system issues efficiently.",
      },
      {
        title: "Transformer inspection services",
        desc: "Detailed inspections and condition assessments ensure safe operation and extend the service life of transformers and switchgear.",
      },
      {
        title: "Electrical infrastructure upgrades",
        desc: "System upgrades and retrofits improve efficiency, reliability, and compatibility with modern electrical technologies.",
      },
      {
        title: "Power monitoring and performance analysis",
        desc: "Continuous monitoring and performance analysis detect inefficiencies, optimize energy usage, and maintain power quality.",
      },
      {
        title: "Spare parts management and replacement",
        desc: "Strategic spare parts planning ensures critical components are available for timely maintenance and system restoration.",
      },
    ],
    icon: "M14.7 6.3a1 1 0 000 1.4l1.6 1.6a1 1 0 001.4 0l3.77-3.77a6 6 0 01-7.94 7.94l-6.91 6.91a2.12 2.12 0 01-3-3l6.91-6.91a6 6 0 017.94-7.94l-3.76 3.76z",
  },
];


export const mechanical: Mechanical[] = [
  {
    num: "01 / 07",
    title: "Mechanical System Design & Engineering",
    desc: "We design and develop robust mechanical systems that support industrial processes and facility operations, including:",
    bullets: [
      "Industrial piping system design and layout",
      "Mechanical equipment specification and sizing",
      "Process piping and pipeline engineering",
      "Pump, compressor, and valve system integration",
      "Structural support systems for mechanical equipment",
      "Thermal and fluid system modeling",
    ],
    icon: "M2 20h20M6 20V10l6-8 6 8v10M10 20v-5h4v5",
  },
  {
    num: "02 / 07",
    title: "Industrial Equipment Installation & Commissioning",
    desc: "We provide professional installation and commissioning services to ensure mechanical equipment operates safely and efficiently from the outset, including:",
    bullets: [
      "Industrial equipment installation and alignment",
      "Pump, compressor, and turbine installation",
      "Rotating equipment setup and calibration",
      "Mechanical system commissioning and testing",
      "Equipment performance verification",
    ],
    icon: "M14.7 6.3a1 1 0 000 1.4l1.6 1.6a1 1 0 001.4 0l3.77-3.77a6 6 0 01-7.94 7.94l-6.91 6.91a2.12 2.12 0 01-3-3l6.91-6.91a6 6 0 017.94-7.94l-3.76 3.76z",
  },
  {
    num: "03 / 07",
    title: "HVAC & Industrial Ventilation Systems",
    desc: "We design and implement heating, ventilation, and air conditioning systems that maintain optimal environmental conditions for industrial facilities, including:",
    bullets: [
      "Industrial HVAC system design and engineering",
      "Process cooling and chilled water systems",
      "Ventilation systems for hazardous environments",
      "Air filtration and dust control systems",
      "Heat recovery and thermal management solutions",
    ],
    icon: "M9.59 4.59A2 2 0 1111 8H2m10.59 11.41A2 2 0 1014 16H2m15.73-8.27A2.5 2.5 0 1119.5 12H2",
  },
  {
    num: "04 / 07",
    title: "Fluid Handling & Process Mechanical Systems",
    desc: "Efficient fluid transport and control are critical for industrial processes, and our engineers design systems that ensure reliable flow management, including:",
    bullets: [
      "Pump system design and hydraulic analysis",
      "Valve selection and flow control systems",
      "Pipeline stress analysis and routing design",
      "Pressure vessel integration",
      "Flow monitoring and control instrumentation support",
      "Fluid transport system optimization",
    ],
    icon: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zM8 12c0-1.1.9-2 2-2h4M8 12l2-2m-2 2l2 2m6-2h.01",
  },
  {
    num: "05 / 07",
    title: "Fabrication & Mechanical Construction Support",
    desc: "We support fabrication and construction activities required for industrial mechanical infrastructure, including:",
    bullets: [
      "Custom mechanical component fabrication",
      "Structural steel fabrication for mechanical systems",
      "Pipeline and piping fabrication",
      "Mechanical system installation supervision",
      "Quality assurance and fabrication inspection",
      "Field construction coordination",
    ],
    icon: "M15 12H3m12 0l-4-4m4 4l-4 4M21 4v6.5A3.5 3.5 0 0117.5 14H15",
  },
  {
    num: "06 / 07",
    title: "Mechanical Safety Engineering & Compliance",
    desc: "Safety and regulatory compliance are essential components of every mechanical system we engineer, including:",
    bullets: [
      "Mechanical hazard analysis and risk assessment",
      "Pressure system safety design",
      "Equipment guarding and safety enclosure design",
      "Compliance with industry standards and mechanical codes",
      "Operational safety audits and inspections",
    ],
    icon: "M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0zM12 9v4M12 17h.01",
  },
  {
    num: "07 / 07",
    title: "Mechanical System Maintenance, Support & Lifecycle Management",
    desc: "We provide comprehensive lifecycle management services to maintain mechanical system performance, reliability, and operational efficiency throughout equipment lifespan. Our services include:",
    bullets: [],
    wide: true,
    wideFeatures: [
      {
        title: "Maintenance programs",
        desc: "Structured maintenance schedules and corrective interventions ensure reliable equipment performance and minimize unexpected mechanical failures.",
      },
      {
        title: "Equipment diagnostics",
        desc: "Advanced diagnostics and performance analysis identify mechanical faults and support efficient system restoration.",
      },
      {
        title: "Rotating equipment inspections",
        desc: "Routine inspections ensure safe operation and extend the service life of pumps, compressors, and turbines.",
      },
      {
        title: "Mechanical infrastructure upgrades",
        desc: "System upgrades and retrofits improve operational efficiency and compatibility with modern mechanical technologies.",
      },
      {
        title: "Power monitoring and performance analysis",
        desc: "Continuous monitoring identifies inefficiencies and improves mechanical system performance.",
      },
      {
        title: "Spare parts management and replacement",
        desc: "Strategic spare parts planning ensures critical mechanical components are available when needed.",
      },
    ],
    icon: "M12 2v4m0 12v4M4.93 4.93l2.83 2.83m8.48 8.48l2.83 2.83M2 12h4m12 0h4M4.93 19.07l2.83-2.83m8.48-8.48l2.83-2.83",
  },
];


export const instrumentation : Instrumentation[] = [
  {
    num: "01 / 07",
    title: "Process Instrumentation Design & Engineering",
    desc: "We design comprehensive instrumentation systems that enable accurate measurement and control of industrial processes, including:",
    bullets: [
      "Process instrumentation specification and selection",
      "Pressure, temperature, flow, and level measurement systems",
      "Instrumentation loop design and documentation",
      "Piping and Instrumentation Diagram (P&ID) development",
      "Instrument index creation and tag management",
      "Control valve sizing and specification",
    ],
    icon: "M9 3H5a2 2 0 00-2 2v4m6-6h10a2 2 0 012 2v4M9 3v18m0 0h10a2 2 0 002-2v-4M9 21H5a2 2 0 01-2-2v-4m0 0h18",
  },
  {
    num: "02 / 07",
    title: "Control System Design & Integration",
    desc: "We develop and integrate advanced control systems that provide precise regulation of industrial processes, including:",
    bullets: [
      "Control system architecture design",
      "PLC and DCS control logic development",
      "Human Machine Interface (HMI) configuration",
      "Control panel and junction box design",
      "Industrial communication network integration",
    ],
    icon: "M21 16V8a2 2 0 00-1-1.73l-7-4a2 2 0 00-2 0l-7 4A2 2 0 003 8v8a2 2 0 001 1.73l7 4a2 2 0 002 0l7-4A2 2 0 0021 16zM3.27 6.96L12 12.01 20.73 6.96M12 22.08V12",
  },
  {
    num: "03 / 07",
    title: "Field Instrument Installation & Calibration",
    desc: "Accurate instrumentation requires precise installation and calibration to ensure reliable measurements and control signals, including:",
    bullets: [
      "Field instrument installation and configuration",
      "Calibration of pressure, flow, level, and temperature transmitters",
      "Control valve installation and tuning",
      "Instrument loop checking and signal verification",
      "Instrument impulse line installation",
    ],
    icon: "M12 2h2v2h-2zM12 20h2v2h-2zM4.93 4.93l1.41 1.41-1.41 1.41zM17.66 17.66l1.41 1.41-1.41 1.41zM2 12h2v2H2zM20 12h2v2h-2zM6.34 17.66l-1.41 1.41 1.41 1.41zM19.07 4.93l-1.41 1.41 1.41 1.41zM12 6a6 6 0 100 12A6 6 0 0012 6zm0 2a4 4 0 110 8 4 4 0 010-8z",
  },
  {
    num: "04 / 07",
    title: "Industrial Measurement & Monitoring Systems",
    desc: "Reliable industrial operations depend on accurate measurement and real-time monitoring of critical parameters, including:",
    bullets: [
      "Process data acquisition systems",
      "Real-time monitoring and alarm systems",
      "Industrial sensor network integration",
      "Condition monitoring systems",
      "Environmental and emissions monitoring systems",
      "Instrumentation data validation and analysis",
    ],
    icon: "M22 12h-4l-3 9L9 3l-3 9H2",
  },
  {
    num: "05 / 07",
    title: "Control Valve & Actuation Systems",
    desc: "We engineer precise flow control systems that regulate process variables and maintain operational stability, including:",
    bullets: [
      "Control valve specification and sizing",
      "Pneumatic and electric actuator integration",
      "Valve positioner configuration",
      "Automated valve control systems",
      "Shutdown valve (SDV) configuration",
      "Flow control loop optimization",
    ],
    icon: "M12 2v6m0 0l-3-3m3 3l3-3M12 22v-6m0 0l-3 3m3-3l3 3M2 12h6m0 0L5 9m3 3l-3 3M22 12h-6m0 0l3-3m-3 3l3 3",
  },
  {
    num: "06 / 07",
    title: "Instrumentation Safety Systems & Compliance",
    desc: "Instrumentation plays a critical role in maintaining safe industrial operations and regulatory compliance, including:",
    bullets: [
      "Safety Instrumented System (SIS) engineering",
      "Emergency shutdown (ESD) system integration",
      "Fire and gas detection instrumentation",
      "SIL assessment and verification",
      "Hazard and Operability (HAZOP) support",
    ],
    icon: "M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10zM9 12l2 2 4-4",
  },
  {
    num: "07 / 07",
    title: "Instrumentation System Maintenance, Support & Lifecycle Management",
    desc: "We provide comprehensive lifecycle management services to maintain instrumentation accuracy, reliability, and operational performance throughout system lifespan. Our services include:",
    bullets: [],
    wide: true,
    wideFeatures: [
      {
        title: "Instrumentation maintenance",
        desc: "Structured maintenance schedules and corrective interventions maintain measurement accuracy and prevent instrumentation failures.",
      },
      {
        title: "Instrument diagnostics",
        desc: "Advanced diagnostics identify faulty sensors, signal errors, and control issues within instrumentation systems.",
      },
      {
        title: "Calibration management services:",
        desc: "Routine calibration ensures instruments maintain measurement precision and comply with operational standards.",
      },
      {
        title: "Instrumentation upgrades and modification",
        desc: "System upgrades improve measurement reliability and integrate modern smart instrumentation technologies.",
      },
      {
        title: "Monitoring and performance verification",
        desc: "Continuous monitoring ensures instruments operate within specified accuracy and performance ranges.",
      },
      {
        title: "Spare parts management and replacement",
        desc: "Strategic spare parts planning ensures critical instrumentation components are readily available.",
      },
    ],
    icon: "M14.7 6.3a1 1 0 000 1.4l1.6 1.6a1 1 0 001.4 0l3.77-3.77a6 6 0 01-7.94 7.94l-6.91 6.91a2.12 2.12 0 01-3-3l6.91-6.91a6 6 0 017.94-7.94l-3.76 3.76z",
  },
];


export const manpower : Manpower[] = [
  {
    num: "01 / 07",
    title: "Technical Manpower Supply & Workforce Deployment",
    desc: "We provide skilled technical personnel to support engineering, operational, and maintenance activities across industrial facilities, including:",
    bullets: [
      "Engineering and technical personnel deployment",
      "Project-based workforce supply",
      "Skilled technicians and specialist operators",
      "Field service engineers and maintenance teams",
      "Construction and installation workforce support",
      "Temporary and long-term workforce placement",
    ],
    icon: "M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2M9 11a4 4 0 100-8 4 4 0 000 8zM23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75",
  },
  {
    num: "02 / 07",
    title: "Workforce Planning & Resource Management",
    desc: "Effective workforce planning ensures the right expertise is available at the right time to support operational demands, including:",
    bullets: [
      "Strategic workforce planning and forecasting",
      "Personnel allocation and resource scheduling",
      "Workforce productivity monitoring",
      "Labor cost optimization strategies",
      "Shift planning and workforce rotation systems",
    ],
    icon: "M8 6h13M8 12h13M8 18h13M3 6h.01M3 12h.01M3 18h.01",
  },
  {
    num: "03 / 07",
    title: "Technical Training & Skills Development",
    desc: "We provide structured training programs designed to enhance workforce competence and technical capabilities, including:",
    bullets: [
      "Technical skills development programs",
      "Engineering and industrial safety training",
      "Equipment operation training",
      "Automation and control systems training",
      "Maintenance and troubleshooting training",
    ],
    icon: "M2 3h6a4 4 0 014 4v14a3 3 0 00-3-3H2zM22 3h-6a4 4 0 00-4 4v14a3 3 0 013-3h7z",
  },
  {
    num: "04 / 07",
    title: "Workforce Performance Management",
    desc: "We implement structured systems that ensure workforce performance aligns with operational objectives and industry standards, including:",
    bullets: [
      "Employee performance evaluation systems",
      "Competency assessment frameworks",
      "Productivity monitoring and reporting",
      "Operational performance improvement strategies",
      "Workforce engagement programs",
      "Workplace efficiency assessments",
    ],
    icon: "M18 20V10M12 20V4M6 20v-6",
  },
  {
    num: "05 / 07",
    title: "Industrial Workforce Compliance & Safety Management",
    desc: "Compliance with labor regulations and workplace safety standards is essential for industrial operations, including:",
    bullets: [
      "Workplace safety training and certification",
      "Regulatory workforce compliance management",
      "Industrial health and safety programs",
      "Personnel documentation and credential verification",
      "Safety culture development programs",
      "Incident reporting and risk management support",
    ],
    icon: "M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0zM12 9v4M12 17h.01",
  },
  {
    num: "06 / 07",
    title: "Project Workforce Support Services",
    desc: "Large industrial projects require specialized workforce management to maintain efficiency and coordination, including:",
    bullets: [
      "Project workforce mobilization and demobilization",
      "Site workforce administration",
      "Contract workforce management",
      "Project staffing coordination",
      "Workforce logistics and accommodation coordination",
    ],
    icon: "M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2M3 11l2 2 4-4M16 11h6M16 16h4",
  },
  {
    num: "07 / 07",
    title: "Workforce Support, Monitoring & Development Programs",
    desc: "We provide ongoing workforce support programs to ensure personnel remain productive, skilled, and aligned with operational requirements. Our services include:",
    bullets: [],
    wide: true,
    wideFeatures: [
      {
        title: "Workforce performance monitoring",
        desc: "Continuous monitoring ensures personnel performance aligns with operational targets and project requirements.",
      },
      {
        title: "Technical skills assessment",
        desc: "Regular competency evaluations identify training needs and improve workforce capability.",
      },
      {
        title: "Training program coordination",
        desc: "Structured training programs maintain workforce skills and support continuous professional development.",
      },
      {
        title: "Workforce support services",
        desc: "Operational support ensures personnel remain effective in demanding industrial environments.",
      },
      {
        title: "Career development planning",
        desc: "Structured development pathways help personnel advance their technical and professional capabilities.",
      },
      {
        title: "Personnel replacement planning",
        desc: "Strategic workforce planning ensures qualified personnel are available when staffing changes occur.",
      },
    ],
    icon: "M22 12h-4l-3 9L9 3l-3 9H2",
  },
];