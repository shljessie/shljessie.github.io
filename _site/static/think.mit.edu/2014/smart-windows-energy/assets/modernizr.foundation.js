<!DOCTYPE HTML>
<html ng-app="myApp">

<head><script type="text/javascript" src="/static/js/analytics.js?v=1508831700.0" charset="utf-8"></script>

<script type="text/javascript">archive_analytics.values.service='wb';archive_analytics.values.server_name='wwwb-app39.us.archive.org';archive_analytics.values.server_ms=408;</script><script type="text/javascript" src="/static/js/wbhack.js?v=1508831700.0" charset="utf-8"></script>

<script type="text/javascript">
__wbhack.init('https://web.archive.org/web');
</script>
<link rel="stylesheet" type="text/css" href="/static/css/banner-styles.css?v=1508831700.0" />
<link rel="stylesheet" type="text/css" href="/static/css/iconochive.css?v=1508831700.0" />

<!-- End Wayback Rewrite JS Include -->
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link rel="shortcut icon" href="/web/20171025213906im_/https://think.mit.edu/images/lighbulb.png"/>
  <title> Home | MIT THINK Scholars Program</title>
  <link rel="stylesheet" type="text/css" href="/web/20171025213906cs_/https://think.mit.edu/semantic/dist/semantic.min.css">
  <link rel="stylesheet" href="https://web.archive.org/web/20171025213906cs_/https://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/css/bootstrap.min.css">
  <link rel="stylesheet" href="https://web.archive.org/web/20171025213906cs_/https://maxcdn.bootstrapcdn.com/font-awesome/4.4.0/css/font-awesome.min.css">
  <link href="/web/20171025213906cs_/https://think.mit.edu/stylesheets/style.css" rel="stylesheet" type="text/css"/>
  <link href="https://web.archive.org/web/20171025213906cs_/https://fonts.googleapis.com/css?family=Open+Sans:300,400,700" rel="stylesheet" type="text/css"/>
  <link href="https://web.archive.org/web/20171025213906cs_/https://fonts.googleapis.com/css?family=Roboto:300,400,900" rel="stylesheet" type="text/css">
  <link href="https://web.archive.org/web/20171025213906cs_/https://fonts.googleapis.com/css?family=Montserrat" rel="stylesheet">
  <script src="https://web.archive.org/web/20171025213906js_/https://code.jquery.com/jquery-3.1.1.min.js" integrity="sha256-hVVnYaiADRTO2PzUGmuLJr8BLUSjGIZsDYGmIJLv2b8=" crossorigin="anonymous"></script>
  <script src="/web/20171025213906js_/https://think.mit.edu/semantic/dist/semantic.min.js"></script>
  <script src="/web/20171025213906js_/https://think.mit.edu/scripts/angular/angular.js"></script>
  <script src="/web/20171025213906js_/https://think.mit.edu/scripts/ng-file-upload/dist/ng-file-upload-shim.min.js"></script>
  <script src="/web/20171025213906js_/https://think.mit.edu/scripts/ng-file-upload/dist/ng-file-upload.min.js"></script>
  <script src="/web/20171025213906js_/https://think.mit.edu/scripts/dropbox/dist/Dropbox-sdk.min.js"></script>
  <script src="/web/20171025213906js_/https://think.mit.edu/javascripts/index.js"></script>
  <script src="/web/20171025213906js_/https://think.mit.edu/app/app.js"></script>
  <script src="/web/20171025213906js_/https://think.mit.edu/app/controllers.js"></script>
  <script type="text/javascript" src="https://web.archive.org/web/20171025213906js_/https://ajax.googleapis.com/ajax/libs/jquery/1.11.3/jquery.min.js"></script>
  <script src="https://web.archive.org/web/20171025213906js_/https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/js/bootstrap.min.js" integrity="sha384-0mSbJDEHialfmuBBQP6A4Qrprq5OVfW37PRR3j5ELqxss1yVqOtnepnHVP9aJ7xS" crossorigin="anonymous"></script>
  
</head>


<body ng-controller="IndexController">
  <nav class="navbar navbar-inverse navbar-fixed-top">
    <div class="container">
      <div class="navbar-header">
        <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar-collapse">
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
        </button>
      </div>

      <div class="collapse navbar-collapse" id="navbar-collapse">
        <ul class="nav navbar-nav">
          <li><a id="about" href="#intro">ABOUT</a></li>
          <li><a id="dates" href="#guidelines">GUIDELINES</a></li>
          <li><a id="goto-guid" href="#timeline">TIMELINE</a></li>
          <li><a id="goto-guid" href="#currentwinners">WINNERS</a></li>
          <li><a id="goto-team" href="#team">TEAM</a></li>
        </ul>
      </div>
    </div>
  </nav>


  <section id="main">
    <img id="logo" src="/web/20171025213906im_/https://think.mit.edu/images/think_logo_trans.png"/>
    
    <p id="subtitle">  A nationwide educational initiative that empowers students to turn their ideas into a reality.  </p>
    <!-- <p id="apply-info"> Applications will open in early October 2017. </p> -->
    <a id="apply" href="/web/20171025213906/https://think.mit.edu/register"> APPLY NOW </a>
    
    <div class="container">
      <p id="subscribe-info"> Subscribe to our mailing list to keep up with updates! </p>
      <div class="row">
        <div class="col-md-2"></div>
        <div class="col-md-5">
          <div class="ui input">
            <input id="subscribe-input" ng-model="email" type="text" placeholder="Email Address">
          </div>
        </div>
       <div class="col-md-3">
        <a id="subscribe" ng-click="subscribe()"> SUBSCRIBE </a>
      </div>
      <div class="col-md-2">
        <div class="ui hidden success message">
          <div class="header">
           <i class="check circle icon"></i>  Subscribed!
          </div>
        </div>
      </div>
       <div class="col-md-2">
        <div class="ui hidden negative message">
          <div class="header">
           <i class="remove circle icon"></i>  Subscription failed
          </div>
        </div>
      </div>
    </div>
    </div>
  </section>

  <section id="intro">
      <div class="title">
        Welcome to THINK! 
      </div>
      <div class="container">
        <div class="content">
          <div class="row">
            <div class="col-md-4">
              <p id="intro-col"> <b> What is THINK? </b> </p>
              <p class="intro-col-content">
               THINK is an annual nationwide initiative that encourages students to share their innovative and impactful STEM projects that we fund to guide an idea of a product/system into a completed project. THINK strives to advance technological breakthroughs starting at an early age and provide a technical voice for the youth who can one day change the world. The program is organized by a group of undergraduates at MIT.  </p>
            </div>
            <div class="col-md-4">
               <p id="intro-col"> <b> How do I apply? </b> </p>  
               <p class="intro-col-content">Students are expected to submit a proposal (of no more than 10 pages) before the application deadline detailing the problem they are attempting to solve, how their idea/system combats the target problem, developmental procedure, a timetable of milestones, and budget allocation (see the guidelines section below for a full description). </p>
            </div>
            <div class="col-md-4">
              <p id="intro-col"> <b> What are the benefits? </b> </p>
              <p class="intro-col-content">Chosen finalists are invited on an all-expenses paid trip to the MIT campus, where they meet professors in their field of interest, tour labs, get to know the THINK team, and the  members who will become their project mentors. Throughout the development of the project, THINK mentors meet with finalists on a weekly basis for technical guidance, helpful resources, and updates on the project's progress.</p>
            </div>
        </div>
        
         <div class="row">
          <div class="col-lg-6">
            <img id="about-1" src="/web/20171025213906im_/https://think.mit.edu/images/ootb-about-1.png"/>
          </div>
          <div class="col-lg-6">
            <img id="about-2" src="/web/20171025213906im_/https://think.mit.edu/images/ootb-about-2.png"/>
          </div>
        </div>
    </div>      
  </section>

  
  <section id="guidelines">
    <div class="title"> 
       GUIDELINES
    </div>

    <div class="container">
      <div class="content"> 
          <br/>
        <p id="guideline-overview" class="subtitle">
        THINK project proposals are science, technology, and engineering ideas that span many fields, from green technologies and practical devices to software applications. As long as it can be completed in one semester with a $1000 budget, almost anything is fair game! A good proposal has an <strong>insightful idea</strong>, <strong>clearly defined goals</strong>, and a <strong>well thought-out procedure for implementation</strong>. </p>


        <br/>
        <div class="row">
          
          <div class="col-md-5 proposal-overview">
            <p id="proposal-overview-title"> <b> Proposal Overview </b> </p>
            <div class="proposal-overview-list">
              <p id="proposal-overview"> Your submission should be approximately 10 pages long and contain the following components: </p>
              <ul>
                <li> <b> <strong>Title/Cover Page</strong> </b></li>
                <li> <b> <strong>Abstract</strong></b>: Brief introduction to the target problem and your idea.</li>
                <li> <b> <strong>Problem</strong></b>: What's the problem you're trying to solve? Why is it important? </li>
                <li> <b> <strong>Approach</strong></b>: How will you go about building/developing your idea? </li>
                <li> <b> <strong>Timeline</strong></b>: Table of milestones breaking your project down into bite-size goals.</li>
                <li> <b> <strong>Budget</strong></b>: How will you utilize THINK's funding? </li>
                <li> <b> <strong>Personal Reflection</strong></b>: What inspired you to pursue this idea? What are your passions? </li>
              </ul>
            </div>

            <br/>
          </div>
          <div class="col-md-1"></div>
          <div class="col-md-5 proposal-judging">
            <p id="proposal-overview-title"> <b> What We're Looking For </b> </p>
            <div class="proposal-overview-list">
              <p id="proposal-overview"> Your proposal will be judged on the following criteria: </p>
              <ul>
                <li> <b> <strong>Impact</strong></b>: How interesting and relevant is the problem you’re trying to solve?</li>
                <li> <b> <strong>Innovation</strong></b>: How original or creative is your proposed solution? </li>
                <li> <b> <strong>Clarity</strong></b>: How clear are your goals and timeline?  </li>
                <li> <b> <strong>Feasibility</strong></b>: Can your stated goals be accomplished within time, cost, and resource constraints? </li>
              </ul>
            </div>
          </div>
        </div>
        <p class="full-guidelines"> Before applying, make sure to read through the full guidelines here: 
        <a href="static_files/THINK_Program_Guidelines_2017_18.pdf" download> Complete Guidelines for 2017-18 Program</a></p>
        <!-- <img id = "lightbulb" src = "images/bulb_2.png" /> -->
      </div>
    </div>
  </section>

  <section id="timeline">
    <div class="title"> 
       TIMELINE
    </div>
        <ol>
          <li>
            <div>
            <b class="date"> Early Fall 2017 </b>
            <br/>
            THINK applications open. Students complete applications and upload their project proposals to be evaluated.
            </div>
          </li>

          <li>
            <div>
            <b class="date"> January 1, 2018 </b>
            <br/>
            Application Deadline. No more applications will be accepted after this date.
            </div>
          </li>

          <li>
            <div>
            <b class="date"> Mid January 2018 </b>
            <br/>
              Finalists announced and notified of trip to MIT.  
            </div>
          </li>

          <li>
            <div>
              <b class="date"> February 2018 </b>
              <br/>
              Finalists visit MIT, tour the campus, meet professors in their field, and hang out with the THINK committee! 
            </div>
          </li>

          <li>
            <div>
              <b class="date"> March - June 2018 </b>
              <br/>
              THINK mentors work with finalists to complete their projects. 
            </div>
          </li>

          <li>
            <div>
              <b class="date"> June 2018 </b>
              <br/>
              Expected completion of all finalists' projects.  
            </div>
          </li>
        </ol>
  </section>

<section id="currentwinners">
    <div class="title"> 
       THINK 2017 WINNERS
    </div>
    <br><br>
    <ul class="winners">

<li class="odd"><div id="myBtn_fin1">Monitoring of Arsenic in Ground Water Sources using an Innovative IoT Sensor<br>
Anjali Chadha, duPont Manual High School</div></li>
<!-- The Modal -->
<div id="myModal_fin1" class="modal">
  <!-- Modal content -->
  <div class="modal-content-fin">
    <span class="close_fin">&times;</span>
    <br>
    <h2>Monitoring of Arsenic in Ground Water Sources using an Innovative IoT Sensor</h2>
    <h4>Anjali Chadha, duPont Manual High School</h4><br><br>

    <h4><i>Abstract: </i></h4>
    <p>Over 50 million people in the United States and over 1.8 billion people worldwide obtain
water from well-water and other ground water sources. Under the EPA’s Safe Drinking Water
Act, the Maximum Contaminant Level (MCL) only governs the concentration of contaminants
like arsenic allowed in public water systems. There is no MCL goal set for private water sources,
so people are exposed to arsenic levels higher than the 10 ppb level on a regular basis. Sustained
exposure to Arsenic leads to cancer, skin lesions, and blood toxicity.<br>
My engineering goal is to build an automated, solar-powered IoT-based portable sensor
for arsenic using an original design. Although technologies for arsenic detection exist, they are
expensive, time-consuming and onerous to operate by a layperson. That is why a cost-effective
sensor that digitally records the amount of arsenic in water sources over time and across
locations and stores this data in the cloud can be invaluable.<br>
My sensor prototype, programmed in Python, utilizes the colorimetric technique for
arsenic detection where the input is a mercury bromide test strip, which is read inside a black box
using LEDs and converts color values into arsenic concentrations in ppb. Because the system is
solar powered, it can be used in-situ in fields or well sites. The data is collected and stored in the
cloud for easy access as well as for ongoing comparative study of the arsenic levels. The
components used include a Particle Electron cellular transmitter, an Intel Edison, a camera, and
LEDs, among others.
    </p>
  </div>
</div>
<script>
// Get the modal
var modal_fin1 = document.getElementById('myModal_fin1');
// Get the button that opens the modal
var btn_fin1 = document.getElementById("myBtn_fin1");
// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close_fin")[0];
// When the user clicks the button, open the modal 
btn_fin1.onclick = function() {
    modal_fin1.style.display = "block";
}
// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal_fin1.style.display = "none";
}
// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal_fin1) {
        modal_fin1.style.display = "none";
    }
    else if (event.target == modal_fin2) {
        modal_fin2.style.display = "none";
    }
    else if (event.target == modal_fin3) {
        modal_fin3.style.display = "none";
    }
    else if (event.target == modal_fin4) {
        modal_fin4.style.display = "none";
    }
    else if (event.target == modal_fin5) {
        modal_fin5.style.display = "none";
    }
    else if (event.target == modal_fin6) {
        modal_fin6.style.display = "none";
    }
    else if (event.target == modal_fin7) {
        modal_fin7.style.display = "none";
    }
    else if (event.target == modal_aditya) {
        modal_aditya.style.display = "none";
    }
    else if (event.target == modal_allan) {
        modal_allan.style.display = "none";
    }
    else if (event.target == modal_cindy) {
        modal_cindy.style.display = "none";
    }
    else if (event.target == modal_jake) {
        modal_jake.style.display = "none";
    }
    else if (event.target == modal_pooja) {
        modal_pooja.style.display = "none";
    }
    else if (event.target == modal_yuan) {
        modal_yuan.style.display = "none";
    }
    else if (event.target == modal_jenny) {
        modal_jenny.style.display = "none";
    }
    else if (event.target == modal_kavish) {
        modal_kavish.style.display = "none";
    }
    else if (event.target == modal_mauri) {
        modal_mauri.style.display = "none";
    }
    else if (event.target == modal_ramya) {
        modal_ramya.style.display = "none";
    }
    else if (event.target == modal_rebecca) {
        modal_rebecca.style.display = "none";
    }
    else if (event.target == modal_sooraj) {
        modal_sooraj.style.display = "none";
    }
    else if (event.target == modal_steph) {
        modal_steph.style.display = "none";
    }
    else if (event.target == modal_tiff) {
        modal_tiff.style.display = "none";
    }
}
</script>


 <li class="even"><div id="myBtn_fin2">Thermoelectric Arthritis Massager and Heat Therapy Device: An Ergonomic Approach to Arthritis Relief and Treatment<br>
Pranav Upadhyayula and Sushil Upadhyayula, Illinois Mathematics and Science Academy</div></li>
<!-- The Modal -->
<div id="myModal_fin2" class="modal">
  <!-- Modal content -->
  <div class="modal-content-fin">
    <span class="close_fin">&times;</span>
    <br>
    <h2>Thermoelectric Arthritis Massager and Heat Therapy Device: An Ergonomic Approach to Arthritis Relief and Treatment</h2>
    <h4>Pranav Upadhyayula and Sushil Upadhyayula, Illinois Mathematics and Science Academy</h4><br><br>

    <h4><i>Abstract: </i></h4>
    <p>Over 350 million people, with the majority lying in the older population, around the
world suffer from various types of arthritis, which causes severe joint pain, discomfort, and
stiffness. Although certain procedures can be performed to help reduce the deleterious effects of
arthritis, the joint pain is often a chronic one that sufferers of this condition face for decades.
Currently, there exist some large massage systems and some handheld heat devices that allow
users to relieve some of their pain. However, these devices have glaring shortcomings: they are
either bulky or impede the user’s ability to continue normal activity, they are not cost effective,
and they rely on an external source of electricity or power. This makes them unwieldy and
impractical for the entire world. Our solution uses a small thermoelectric Seebeck generator
embedded within a bandage or wrap that solely uses the difference in body and ambient
temperature to generate electricity. From this electricity, our ergonomic device can heat the area
where the bandage is using electric heating coils and can provide a relieving massage therapy
using the power of an Electromagnetic Pulse Generator. All of these electrical and physical
elements will be made on a small scale as to not provide excessive heat or a harsh massage.
Furthermore, this small scale makes them easier to manufacture and lighter to wear. The
completed apparatus will not only help with arthritis treatment, but also will have various
implications for the medical and commercial industries. 
    </p>
  </div>
</div>
<script>
// Get the modal
var modal_fin2 = document.getElementById('myModal_fin2');
// Get the button that opens the modal
var btn_fin2 = document.getElementById("myBtn_fin2");
// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close_fin")[1];
// When the user clicks the button, open the modal 
btn_fin2.onclick = function() {
    modal_fin2.style.display = "block";
}
// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal_fin2.style.display = "none";
}
</script>



<li class="odd"><div id="myBtn_fin3">Customized Electrochemical Gas Sensors for Fume Hood Safety<br>
Jonathan Kuo and Stacy Hu, Torrey Pines High School</div></li>
<!-- The Modal -->
<div id="myModal_fin3" class="modal">
  <!-- Modal content -->
  <div class="modal-content-fin">
    <span class="close_fin">&times;</span>
    <br>
    <h2>Customized Electrochemical Gas Sensors for Fume Hood Safety</h2>
    <h4>Jonathan Kuo and Stacy Hu, Torrey Pines High School</h4><br><br>

    <h4><i>Abstract: </i></h4>
    <p>Although fume hoods have significantly improved gas ventilation when working with noxious
chemicals, improper usage or mechanical errors can compromise the safety of fume hood users.
Cluttered workspaces, airflow disturbances, and incorrect sash height can all contribute to gas
leakage during fume hood use. Airflow monitors can only detect the volume of air being
removed by the fume hood and are unable to determine the amounts of toxic gases leaking from
the fume hood. We seek to design several electrochemical gas sensors specific to commonly
used laboratory gases that can measure real-time gas concentrations in parts per million (ppm).
Depending on their specific experiments, chemists and other laboratory workers would be able to
customize a selection of reagents to monitor, alerting them of exceeded Ceiling Limits (CL), the
amount of gaseous contaminant a worker may be exposed to at any time, in accordance with
California Occupational Safety and Health Administration (Cal/OSHA) standards. Our gas
sensors consist of a platinum (Pt) working electrode, Pt counter electrode, a silver/silver chloride
(Ag/AgCl) reference electrode all bathed in ionic liquid 1-Ethyl-3-methylimidazolium hydrogen
sulfate (EMIM-HS); an activated charcoal filter preventing unwanted gas flow into the sensor;
polytetrafluoroethylene (PTFE/Teflon) membranes preventing electrolyte flow out of the sensor;
and a potentiostat that connects to the sensor and maintains a constant potential. Each gas sensor
can be placed onto Velcro strips adhered to the front of the fume hood, allowing for easy
substitution of different sensors depending on reagents workers use.
    </p>
  </div>
</div>
<script>
// Get the modal
var modal_fin3 = document.getElementById('myModal_fin3');
// Get the button that opens the modal
var btn_fin3 = document.getElementById("myBtn_fin3");
// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close_fin")[2];
// When the user clicks the button, open the modal 
btn_fin3.onclick = function() {
    modal_fin3.style.display = "block";
}
// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal_fin3.style.display = "none";
}
</script>

 
<li class="even"><div id="myBtn_fin4">Development and Testing of Functionalized Hypercrosslinked Polymer Resins for Adsorption of Rare Earth Elements<br>
Vera Zarubin, The Bronx High School of Science</div></li>
<!-- The Modal -->
<div id="myModal_fin4" class="modal">
  <!-- Modal content -->
  <div class="modal-content-fin">
    <span class="close_fin">&times;</span>
    <br>
    <h2>Development and Testing of Functionalized Hypercrosslinked Polymer Resins for Adsorption of Rare Earth Elements</h2>
    <h4>Vera Zarubin, The Bronx High School of Science</h4><br><br>

    <h4><i>Abstract: </i></h4>
    <p>Rare earth elements are irreplaceable components of modern technologies due to their
unique magnetic, phosphorescent, and catalytic properties. Recycling consumer materials
containing rare earths is a promising new source of these critical materials. However, the current
recycling methods are unsustainable and limited by low efficiencies. To address this problem, I
seek to develop a cost-effective and environmentally-friendly method of recycling that exhibits
high selectivity for valuable rare earth elements. I will follow an unconventional approach to
recover dissolved rare earths by adsorption onto functionalized hypercrosslinked polymer resins.
To achieve high selectivity for valuable rare earths, surface functionalities such as diglycolamide
ligands will be grafted to the resins by a solution polymerization technique and the ligand
conformations to the resins will be simulated with the molecular modeling suite Autodock Vina.
Neodymium magnets and light phosphors from end-of-life consumer products will be dissolved
separately in dilute acid, and functionalized resins will be introduced as adsorbents. The main
characteristics of the adsorption behavior will be inferred by means of isotherm, kinetics,
desorption, and thermodynamic studies. The rare earths can be desorbed from the resins with
water or edetic acid and directly reused for applications with minimal processing. This novel
approach is expected to be applicable to recycling end-of-life products, including light phosphors
and magnets, to diversify and improve the sustainability of the rare earths supply chain.
    </p>
  </div>
</div>
<script>
// Get the modal
var modal_fin4 = document.getElementById('myModal_fin4');
// Get the button that opens the modal
var btn_fin4 = document.getElementById("myBtn_fin4");
// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close_fin")[3];
// When the user clicks the button, open the modal 
btn_fin4.onclick = function() {
    modal_fin4.style.display = "block";
}
// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal_fin4.style.display = "none";
}
</script>
 


<li class="odd"><div id="myBtn_fin5">A Novel Approach to Compression of Vector-Based Video through Motion Tracking<br>
Abhi Upadhyay and Kanav Kalucha, Mission San Jose High School</div></li>
<!-- The Modal -->
<div id="myModal_fin5" class="modal">
  <!-- Modal content -->
  <div class="modal-content-fin">
    <span class="close_fin">&times;</span>
    <br>
    <h2>A Novel Approach to Compression of Vector-Based Video through Motion Tracking</h2>
    <h4>Abhi Upadhyay and Kanav Kalucha, Mission San Jose High School</h4><br><br>

    <h4><i>Abstract: </i></h4>
    <p>As the age of technology progresses, the demand for video with higher and higher
resolution increases accordingly, and as video compression algorithms approach near-theoretically
perfect compression, more bandwidth is necessary to transfer video streams. A higher resolution
does not change the fact that zooming eventually causes the video to become grainy and largely
unviewable. Rasterized video is the norm right now, but that entails tedious manual motion
tracking and an inability to zoom into videos without pixelating and destroying the coherence of
the video as a whole. Through our project, we hope to create a new video codec, which will use
vectors as its primitive objects, not pixels. Vectors are precomputed lines defined by mathematical
functions, and so maintain consistency no matter what the scale. They are already used for graphic
design and typesetting, and we hope to extend their functionality to improve video compression,
resolution, and scalability by utilizing the vast computational resources available today. Each
frame in our video will be constructed entirely from vectors, and we will also group vectors as
'objects' across frames to make for easier video manipulation and editing and to further compress
our video. Through this novel approach to video compression and storage, we can effectively
reduce the size of a raw vector video by around 55%, and have it in a format where video editing
is simplified and streamlined.
    </p>
  </div>
</div>
<script>
// Get the modal
var modal_fin5 = document.getElementById('myModal_fin5');
// Get the button that opens the modal
var btn_fin5 = document.getElementById("myBtn_fin5");
// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close_fin")[4];
// When the user clicks the button, open the modal 
btn_fin5.onclick = function() {
    modal_fin5.style.display = "block";
}
// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal_fin5.style.display = "none";
}
</script>
 



<li class="even"><div id="myBtn_fin6">Piezoelectric Plates as a Method for Vibrational Energy Harvesting in Roads<br>
Vishnu Pulavarthi and Chester Huynh, Maggie L. Walker Governor's School</div></li>
<!-- The Modal -->
<div id="myModal_fin6" class="modal">
  <!-- Modal content -->
  <div class="modal-content-fin">
    <span class="close_fin">&times;</span>
    <br>
    <h2>Piezoelectric Plates as a Method for Vibrational Energy Harvesting in Roads</h2>
    <h4>Vishnu Pulavarthi and Chester Huynh, Maggie L. Walker Governor's School</h4><br><br>

    <h4><i>Abstract: </i></h4>
    <p>Wasted power is a problem which has plagued municipalities for some time, costing great
amounts of money and wasting electricity. Traffic lights at intersections and speed sensors often
run for 24 hours at times where commuting traffic is very low. This problem of wasting
electricity is one we are trying to solve through the use of a novel implementation of a
piezoelectric system in a roadway. Piezoelectric materials become electrically polarized in
response to a mechanical stress, therefore being capable of generating an electric charge.<br>
By placing piezoelectric materials over the surface of a roadway, a piezoelectric material
can be oscillated with a driving frequency provided by the weight of passing objects such as cars.
The purpose of this investigation is create a mass producible load bearing piezoelectric ceramic
to be placed on the surface of a road to generate electricity. To achieve success, our method must
be able to support the weight of a range of large vehicles and align the driving frequency
provided by a moving mass with the resonant frequency of a piezoelectric plate.<br>
To test this idea, we will operate the project on a lower scale using a thin asphalt surface,
small scale piezoelectric panels, and proportionally small moving objects of various masses. The
results of this investigation will then be scaled up to simulate what would potentially occur in
real scenario. To implement this idea effectively, the piezoelectric panels should be placed over
roads of highly populated metropolitan areas.
    </p>
  </div>
</div>
<script>
// Get the modal
var modal_fin6 = document.getElementById('myModal_fin6');
// Get the button that opens the modal
var btn_fin6 = document.getElementById("myBtn_fin6");
// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close_fin")[5];
// When the user clicks the button, open the modal 
btn_fin6.onclick = function() {
    modal_fin6.style.display = "block";
}
// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal_fin6.style.display = "none";
}
</script>
 



<li class="odd"><div id="myBtn_fin7">Turning Nuclear Waste into Usable Energy<br>
Armaun Sanayei, Basis Independent Silicon Valley</div></li>
<!-- The Modal -->
<div id="myModal_fin7" class="modal">
  <!-- Modal content -->
  <div class="modal-content-fin">
    <span class="close_fin">&times;</span>
    <br>
    <h2>Turning Nuclear Waste into Usable Energy</h2>
    <h4>Armaun Sanayei, Basis Independent Silicon Valley</h4><br><br>

    <h4><i>Abstract: </i></h4>
    <p>The nuclear industry generates a total of about 12,000 metric tons of high-level
radioactive waste per year (USNCR). This fuel just ends up in dry and wet used fuel storage
facilities, taking up space, and waiting for a permanent solution to be found. There is an ongoing
controversy over high-level radioactive waste, and it stands as a major constraint in the global
expansion of nuclear energy; however, this used fuel may not be a dead end. As the name
suggests, this used fuel still produces large amounts of high-energy electromagnetic radiation.
What if one could harness this energy as one does with other forms electro-magnetic radiation?
Through using the radioluminescent properties of phosphors like Gd2O2S:Tb , one can convert
short wavelength radiation (x-ray and gamma radiation) into the visible spectrum and capture
that energy via photovoltaic cells. By placing a phosphor, like Gd2O2S:Tb, above the
photovoltaic module encapsulant, and using an amorphous-Silicon cell in order to efficiently
capture the ~510nm wavelength light emitted from the phosphor, one can capture lots of
radiation energy that would otherwise go to waste in a very simple , cost effective, and easy to
implement way. To test the energy generation module, one can use medical x-rays or any other
radiation sources to simulate the radiation emitted from nuclear waste. To further the
applicability of the invention, one can calculate the amount of energy produced, and create an
easy add-on component to a modern fuel assembly to generate energy.
    </p>
  </div>

</div>
<script>
// Get the modal
var modal_fin7 = document.getElementById('myModal_fin7');
// Get the button that opens the modal
var btn_fin7 = document.getElementById("myBtn_fin7");
// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close_fin")[6];
// When the user clicks the button, open the modal 
btn_fin7.onclick = function() {
    modal_fin7.style.display = "block";
}
// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal_fin7.style.display = "none";
}
</script>
</ul>

<br><br>


  
  <h3 style="color: #05344E">See full list of THINK <a style="color: #4080bf;" href="https://web.archive.org/web/20171025213906/https://drive.google.com/open?id=0Bx4qozzLDP_7Y1o0N0I1bTNmTm8" target="_blank">2017</a> winners, and winners from <a style="color: #4080bf" href="https://web.archive.org/web/20171025213906/https://drive.google.com/open?id=0Bx4qozzLDP_7cFRxQ1JDcFVIQzQ" target="_blank">2016</a> and <a style="color: #4080bf" href="https://web.archive.org/web/20171025213906/https://drive.google.com/open?id=0Bx4qozzLDP_7NWx4bkxFVUVSQ0E" target="_blank">2015</a>.</h3>

  </section>

 
<section id="team">
    <div class="title"> 
       TEAM
    </div>
    <br><br>
<ul>

<!-- ADITYA -->
<li class="teammember"><svg width="200" height="200">
    <defs>
        <clippath id="circleView">
            <circle cx="100" cy="100" r="100" fill="#FFFFFF"/>            
        </clippath>
    </defs>
<image id="myBtn_aditya" width="200" height="200" xlink:href="images/aditya.jpg" clip-path="url(#circleView)"/></li>
<!-- The Modal -->
<div id="myModal_aditya" class="modal">
  <!-- Modal content -->
  <div class="modal-content">
    <span class="close">&times;</span>
    <image src="/web/20171025213906im_/https://think.mit.edu/images/aditya.jpg" width="200" height="200" align="left"/>
    <br>
    <h1>Aditya Jog</h1>
    <h4>Class of 2021 | Biological Engineering</h4><br><br><br><br><br>

    <p>Aditya is a freshman from Mason, Ohio majoring in biological engineering. He decided to join the THINK team after the amazing experience he had back in 2015, when THINK gave him the tools to develop a new kind of photovoltaic cooling system. Aditya is proud to be part of an organization that can connect high school students who have a passion for science and engineering with the resources that MIT has to offer. His academic interests outside of engineering lie in economics and political science and he hopes to work at the intersection of the technical and societal spheres.  
</p>
  </div>
</div>
<script>
// Get the modal
var modal_aditya = document.getElementById('myModal_aditya');
// Get the button that opens the modal
var btn_aditya = document.getElementById("myBtn_aditya");
// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];
// When the user clicks the button, open the modal 
btn_aditya.onclick = function() {
    modal_aditya.style.display = "block";
}
// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal_aditya.style.display = "none";
}
</script>



<!-- ALLAN -->
<li class="teammember"><svg width="200" height="200">
    <defs>
        <clippath id="circleView">
            <circle cx="100" cy="100" r="100" fill="#FFFFFF"/>            
        </clippath>
    </defs>
<image id="myBtn_allan" width="200" height="200" xlink:href="images/allan.jpg" clip-path="url(#circleView)"/></li>
<!-- The Modal -->
<div id="myModal_allan" class="modal">
  <!-- Modal content -->
  <div class="modal-content">
    <span class="close">&times;</span>
    <image src="/web/20171025213906im_/https://think.mit.edu/images/allan.jpg" width="200" height="200" align="left"/>
    <br>
    <h1>Allan Garcia-Zych</h1>
    <h4>Class of 2021 | Computer Science and Physics</h4><br><br><br><br><br>

    <p>Allan is a freshman from San Diego, California, who will be studying Computer Science and Physics for the next four years. He has a passion for education, and thoroughly believes in the power of technology to make the world a better place. Allan is excited to work with THINK because it provides an opportunity to work at the intersection of education and technology, supporting young people with a passion for STEM. Outside of school Allan is excited to explore the Boston area and all it offers young people like himself. </p>
  </div>
</div>
<script>
// Get the modal
var modal_allan = document.getElementById('myModal_allan');
// Get the button that opens the modal
var btn_allan = document.getElementById("myBtn_allan");
// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[1];
// When the user clicks the button, open the modal 
btn_allan.onclick = function() {
    modal_allan.style.display = "block";
}
// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal_allan.style.display = "none";
}
</script>


<!-- CINDY -->
<li class="teammember"><svg width="200" height="200">
    <defs>
        <clippath id="circleView">
            <circle cx="100" cy="100" r="100" fill="#FFFFFF"/>            
        </clippath>
    </defs>
<image id="myBtn_cindy" width="200" height="200" xlink:href="images/cindy.jpg" clip-path="url(#circleView)"/></li>
<!-- The Modal -->
<div id="myModal_cindy" class="modal">
  <!-- Modal content -->
  <div class="modal-content">
    <span class="close">&times;</span>
    <image src="/web/20171025213906im_/https://think.mit.edu/images/cindy.jpg" width="200" height="200" align="left"/>
    <br>
    <h1>Cindy Yang</h1>
    <h4>Class of 2021 | Computer Science</h4><br><br><br><br><br>

    <p>Cindy is a freshman from Chicago, Illinois, who intends to major in computer science. She is passionate about using programming, math, and technology to create solutions to real-world problems. Some of the most impactful experiences of her high school career was working in neurobiology and bioinformatics labs, where she was exposed to cutting-edge technologies and provided with life-changing mentors. She hopes to provide others with similarly rewarding experiences.</p>
  </div>
</div>
<script>
// Get the modal
var modal_cindy = document.getElementById('myModal_cindy');
// Get the button that opens the modal
var btn_cindy = document.getElementById("myBtn_cindy");
// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[2];
// When the user clicks the button, open the modal 
btn_cindy.onclick = function() {
    modal_cindy.style.display = "block";
}
// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal_cindy.style.display = "none";
}
</script>



<!-- JAKE -->
<li class="teammember"><svg width="200" height="200">
    <defs>
        <clippath id="circleView">
            <circle cx="100" cy="100" r="100" fill="#FFFFFF"/>            
        </clippath>
    </defs>
<image id="myBtn_jake" width="200" height="200" xlink:href="images/jake.jpg" clip-path="url(#circleView)"/></li>
<!-- The Modal -->
<div id="myModal_jake" class="modal">
  <!-- Modal content -->
  <div class="modal-content">
    <span class="close">&times;</span>
    <image src="/web/20171025213906im_/https://think.mit.edu/images/jake.jpg" width="200" height="200" align="left"/>
    <br>
    <h1>Jake Mosley</h1>
    <h4>Class of 2021 | Materials Science and Engineering</h4><br><br><br><br><br>

    <p>Jake is a freshman from Ocala, Florida planning on majoring in Materials Science and Engineering, although he is interested in everything from chemical engineering to political science. Developing and conducting science research projects were a big part of his high school experience and opened many new avenues of opportunity. Jake is enthusiastic to be a member of the THINK team so that he can share the power of STEM with other students, regardless of their circumstances. Outside of school, Jake enjoys long philosophical conversations, playing with all of the dogs, and making the most out of life.
</p>
  </div>
</div>
<script>
// Get the modal
var modal_jake = document.getElementById('myModal_jake');
// Get the button that opens the modal
var btn_jake = document.getElementById("myBtn_jake");
// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[3];
// When the user clicks the button, open the modal 
btn_jake.onclick = function() {
    modal_jake.style.display = "block";
}
// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal_jake.style.display = "none";
}
</script>

<!-- JENNY -->
<li class="teammember"><svg width="200" height="200">
    <defs>
        <clippath id="circleView">
            <circle cx="100" cy="100" r="100" fill="#FFFFFF"/>            
        </clippath>
    </defs>
<image id="myBtn_jenny" width="200" height="200" xlink:href="images/jenny.jpg" clip-path="url(#circleView)"/></li>
<!-- The Modal -->
<div id="myModal_jenny" class="modal">
  <!-- Modal content -->
  <div class="modal-content">
    <span class="close">&times;</span>
    <image src="/web/20171025213906im_/https://think.mit.edu/images/jenny.jpg" width="200" height="200" align="left"/>
    <br>
    <h1>Jenny Li</h1>
    <h4>Class of 2020 | Electrical Engineering and Computer Science</h4><br><br><br><br>

    <p>Jenny is a current sophomore from New York City, New York and is majoring in electrical engineering and computer science, but has many other fields that she would love to explore (Management and Media Studies are just a few)! Jenny loves robotics (go FRC!) and has discovered through her experience with her team that the best reward she could receive from them is the opportunity to pass on her knowledge to underclassmen and give future engineers the tools to start building now. This love for teaching drives her excitement to show students that they are never too young to change the world with their ideas. In her free time, she enjoys telling terrible puns, playing the piano, and de-stressing over a game of volleyball. Jenny is extremely excited to continue her journey at THINK and work with students to make their ideas a reality!</p>
  </div>
</div>
<script>
// Get the modal
var modal_jenny = document.getElementById('myModal_jenny');
// Get the button that opens the modal
var btn_jenny = document.getElementById("myBtn_jenny");
// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[4];
// When the user clicks the button, open the modal 
btn_jenny.onclick = function() {
    modal_jenny.style.display = "block";
}
// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal_jenny.style.display = "none";
}
</script>

</ul>
<br>
<ul>


<!-- KAVISH -->
<li class="teammember"><svg width="200" height="200">
    <defs>
        <clippath id="circleView">
            <circle cx="100" cy="100" r="100" fill="#FFFFFF"/>            
        </clippath>
    </defs>
<image id="myBtn_kavish" width="200" height="200" xlink:href="images/kavish.jpg" clip-path="url(#circleView)"/></li>
<!-- The Modal -->
<div id="myModal_kavish" class="modal">
  <!-- Modal content -->
  <div class="modal-content">
    <span class="close">&times;</span>
    <image src="/web/20171025213906im_/https://think.mit.edu/images/kavish.jpg" width="200" height="200" align="left"/>
    <br>
    <h1>Kavish Gandhi</h1>
    <h4>Class of 2019 | Mathematics</h4><br><br><br><br><br>

    <p>Kavish is a junior from Newton, Massachusetts, majoring in Mathematics. This is his third year on THINK, and he is especially excited to bring opportunities to the many high school students that have the potential to create something amazing if just given the chance. His main academic interests lies in mathematics and computer science, but he also has a childhood passion for astrophysics that continues to this day and an undying love for classical music.</p>
  </div>
</div>
<script>
// Get the modal
var modal_kavish = document.getElementById('myModal_kavish');
// Get the button that opens the modal
var btn_kavish = document.getElementById("myBtn_kavish");
// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[5];
// When the user clicks the button, open the modal 
btn_kavish.onclick = function() {
    modal_kavish.style.display = "block";
}
// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal_kavish.style.display = "none";
}
</script>



<!-- MAURI -->
<li class="teammember"><svg width="200" height="200">
    <defs>
        <clippath id="circleView">
            <circle cx="100" cy="100" r="100" fill="#FFFFFF"/>            
        </clippath>
    </defs>
<image id="myBtn_mauri" width="200" height="200" xlink:href="images/maurizio.jpg" clip-path="url(#circleView)"/></li>
<!-- The Modal -->
<div id="myModal_mauri" class="modal">
  <!-- Modal content -->
  <div class="modal-content">
    <span class="close">&times;</span>
    <image src="/web/20171025213906im_/https://think.mit.edu/images/maurizio.jpg" width="200" height="200" align="left"/>
    <br>
    <h1>Maurizio Diaz</h1>
    <h4>Class of 2020 | Biological Engineering</h4><br><br><br><br><br>

    <p>Maurizio is a sophomore born in Venezuela but previously residing in Miami, Florida. He is majoring in Biological Engineering. Academically, he is interested in synthetic biology research and its real-world applications for the treatment of disease. Outside of the lab, Maurizio is an avid gamer, free food hunter, and computer building enthusiast. As a member of THINK, Maurizio aspires to assist high school students realize their ideas in ways they might not have considered before.</p>
  </div>
</div>
<script>
// Get the modal
var modal_mauri = document.getElementById('myModal_mauri');
// Get the button that opens the modal
var btn_mauri = document.getElementById("myBtn_mauri");
// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[6];
// When the user clicks the button, open the modal 
btn_mauri.onclick = function() {
    modal_mauri.style.display = "block";
}
// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal_mauri.style.display = "none";
}
</script>


<!-- POOJA -->
<li class="teammember"><svg width="200" height="200">
    <defs>
        <clippath id="circleView">
            <circle cx="100" cy="100" r="100" fill="#FFFFFF"/>            
        </clippath>
    </defs>
<image id="myBtn_pooja" width="200" height="200" xlink:href="images/pooja.jpg" clip-path="url(#circleView)"/></li>
<!-- The Modal -->
<div id="myModal_pooja" class="modal">
  <!-- Modal content -->
  <div class="modal-content">
    <span class="close">&times;</span>
    <image src="/web/20171025213906im_/https://think.mit.edu/images/pooja.jpg" width="200" height="200" align="left"/>
    <br>
    <h1>Pooja Reddy</h1>
    <h4>Class of 2020 | Materials Science and Engineering</h4><br><br><br><br><br>

    <p>Pooja is a sophomore from the Boston area, majoring in Materials Science and Engineering and also minoring in design (architecture, yay!). Since she never had the opportunity in high school to develop scientific projects, she is super excited to help other people pursue their scientific passions early on. Other than science education, Pooja is insanely passionate about materials and learning how to manipulate them to create the best versions of products. When she is not in lab making magnetic nanodisks, or up late in architecture studio building things, she enjoys the visual arts, spending time with friends, singing in choirs, and looking out windows.
</p>
  </div>
</div>
<script>
// Get the modal
var modal_pooja = document.getElementById('myModal_pooja');
// Get the button that opens the modal
var btn_pooja = document.getElementById("myBtn_pooja");
// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[7];
// When the user clicks the button, open the modal 
btn_pooja.onclick = function() {
    modal_pooja.style.display = "block";
}
// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal_pooja.style.display = "none";
}
</script>



<!-- RAMYA -->
<li class="teammember"><svg width="200" height="200">
    <defs>
        <clippath id="circleView">
            <circle cx="100" cy="100" r="100" fill="#FFFFFF"/>            
        </clippath>
    </defs>
<image id="myBtn_ramya" width="200" height="200" xlink:href="images/ramya.jpg" clip-path="url(#circleView)"/></li>
<!-- The Modal -->
<div id="myModal_ramya" class="modal">
  <!-- Modal content -->
  <div class="modal-content">
    <span class="close">&times;</span>
    <image src="/web/20171025213906im_/https://think.mit.edu/images/ramya.jpg" width="200" height="200" align="left"/>
    <br>
    <h1>Ramya Nagarajan</h1>
    <h4><b>Co-Director</b></h4>
    <h4>Class of 2020 | Electrical Engineering and Computer Science</h4><br><br>

    <p>Ramya is a sophomore from Burlingame, California majoring in Electrical Engineering and Computer Science. Unfortunately, Ramya never got a chance to do research or participate in academic competitions in high school, and this along with the excitement working with younger students brings her is why she became a part of THINK. When she isn't pset-ing, Ramya loves learning about international relations and stalking startup founders and venture capitalists on Twitter.</p>
  </div>
</div>
<script>
// Get the modal
var modal_ramya = document.getElementById('myModal_ramya');
// Get the button that opens the modal
var btn_ramya = document.getElementById("myBtn_ramya");
// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[8];
// When the user clicks the button, open the modal 
btn_ramya.onclick = function() {
    modal_ramya.style.display = "block";
}
// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal_ramya.style.display = "none";
}
</script>
</ul>


<br>
<ul>


<!-- REBECCA -->    
<li class="teammember"><svg width="200" height="200">
    <defs>
        <clippath id="circleView">
            <circle cx="100" cy="100" r="100" fill="#FFFFFF"/>            
        </clippath>
    </defs>
<image id="myBtn_rebecca" width="200" height="200" xlink:href="images/rebecca.jpg" clip-path="url(#circleView)"/></li>
<!-- The Modal -->
<div id="myModal_rebecca" class="modal">
  <!-- Modal content -->
  <div class="modal-content">
    <span class="close">&times;</span>
    <image src="/web/20171025213906im_/https://think.mit.edu/images/rebecca.jpg" width="200" height="200" align="left"/>
    <br>
    <h1>Rebecca Shin</h1>
    <h4>Class of 2020 | Economics</h4><br><br><br><br><br>

    <p>Rebecca is a current sophomore from Atlanta, GA. She is currently majoring in economics, but is still not sure about a lot of things in her life. She wants to be an educator at some point in her life and has done a variety of things with younger students from running summer camps, after school programs, tutoring, and backpacking with high school freshmen in the middle of the woods. Outside of THINK, she is also involved with dynaMIT, HMMT, her sorority, and loves to read, nap, eat delicious food in Boston, and listen to music.</p>
  </div>
</div>
<script>
// Get the modal
var modal_rebecca = document.getElementById('myModal_rebecca');
// Get the button that opens the modal
var btn_rebecca = document.getElementById("myBtn_rebecca");
// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[9];
// When the user clicks the button, open the modal 
btn_rebecca.onclick = function() {
    modal_rebecca.style.display = "block";
}
// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal_rebecca.style.display = "none";
}
</script>



<!-- SOORAJ -->
<li class="teammember"><svg width="200" height="200">
    <defs>
        <clippath id="circleView">
            <circle cx="100" cy="100" r="100" fill="#FFFFFF"/>            
        </clippath>
    </defs>
<image id="myBtn_sooraj" width="200" height="200" xlink:href="images/sooraj.jpg" clip-path="url(#circleView)"/></li>
<!-- The Modal -->
<div id="myModal_sooraj" class="modal">
  <!-- Modal content -->
  <div class="modal-content">
    <span class="close">&times;</span>
    <image src="/web/20171025213906im_/https://think.mit.edu/images/sooraj.jpg" width="200" height="200" align="left"/>
    <br>
    <h1>Sooraj Boominathan</h1>
    <h4><b>Co-Director</b></h4>
    <h4>Class of 2019 | Computer Science and Engineering</h4><br><br><br>

    <p>Sooraj is a junior from Edmond, Oklahoma majoring in Computer Science and Engineering. This is his third year on THINK, and he is looking forward to continuing to provide high schoolers with the opportunity to make their innovative dreams a reality. Sooraj was a chemistry addict through most of high school, but he is looking forward to developing his interest in computer science at MIT as well. In his free time, Sooraj enjoys browsing Quora in a quest to find the most interesting questions in the world.</p>
  </div>
</div>
<script>
// Get the modal
var modal_sooraj = document.getElementById('myModal_sooraj');
// Get the button that opens the modal
var btn_sooraj = document.getElementById("myBtn_sooraj");
// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[10];
// When the user clicks the button, open the modal 
btn_sooraj.onclick = function() {
    modal_sooraj.style.display = "block";
}
// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal_sooraj.style.display = "none";
}
</script>


<!-- STEPH -->
<li class="teammember"><svg width="200" height="200">
    <defs>
        <clippath id="circleView">
            <circle cx="100" cy="100" r="100" fill="#FFFFFF"/>            
        </clippath>
    </defs>
<image id="myBtn_steph" width="200" height="200" xlink:href="images/stephanie.jpg" clip-path="url(#circleView)"/></li>
<!-- The Modal -->
<div id="myModal_steph" class="modal">
  <!-- Modal content -->
  <div class="modal-content">
    <span class="close">&times;</span>
    <image src="/web/20171025213906im_/https://think.mit.edu/images/stephanie.jpg" width="200" height="200" align="left"/>
    <br>
    <h1>Stephanie Hu</h1>
    <h4>Class of 2020 | Electrical Engineering and Computer Science<br>Brain and Cognitive Sciences</h4><br><br><br>

    <p>Stephanie is a sophomore from the sunny, seasonless suburbs of San Diego, California. Although she really has no clue what she wants to major in, she loves all things science and engineering and is always interested in learning something new. She is beyond excited to share her passion with high school students from around the country and help them realize their potential in the STEM field. When she's not in the lab studying motivational behavior in her mice or struggling over her psets, she enjoys chilling with her friends, hiking, writing thriller novels and angsty poetry, and admiring the color purple.</p>
  </div>
</div>
<script>
// Get the modal
var modal_steph = document.getElementById('myModal_steph');
// Get the button that opens the modal
var btn_steph = document.getElementById("myBtn_steph");
// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[11];
// When the user clicks the button, open the modal 
btn_steph.onclick = function() {
    modal_steph.style.display = "block";
}
// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal_steph.style.display = "none";
}
</script>



<!-- TIFF -->
<li class="teammember"><svg width="200" height="200">
    <defs>
        <clippath id="circleView">
            <circle cx="100" cy="100" r="100" fill="#FFFFFF"/>            
        </clippath>
    </defs>
<image id="myBtn_tiff" width="200" height="200" xlink:href="images/tiffany.jpg" clip-path="url(#circleView)"/></li>
<!-- The Modal -->
<div id="myModal_tiff" class="modal">
  <!-- Modal content -->
  <div class="modal-content">
    <span class="close">&times;</span>
    <image src="/web/20171025213906im_/https://think.mit.edu/images/tiffany.jpg" width="200" height="200" align="left"/>
    <br>
    <h1>Tiffany Pan</h1>
    <h4>Class of 2020 | Computer Science and Engineering</h4><br><br><br><br><br>

    <p>Tiffany is a sophomore from Spring, Texas, majoring in Computer Science and Engineering. Her academic passions include applied mathematics, mental math, and computer programming. In her free time, Tiffany enjoys digital photography, visual arts, playing the viola, and piecing together puzzles. This is her second year on THINK, and she is looking forward to presenting intelligent, young minds with the opportunity to make something of their own and realize their potential to change the world.</p>
  </div>
</div>
<script>
// Get the modal
var modal_tiff = document.getElementById('myModal_tiff');
// Get the button that opens the modal
var btn_tiff = document.getElementById("myBtn_tiff");
// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[12];
// When the user clicks the button, open the modal 
btn_tiff.onclick = function() {
    modal_tiff.style.display = "block";
}
// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal_tiff.style.display = "none";
}
</script>


<!-- YUAN -->
<li class="teammember"><svg width="200" height="200">
    <defs>
        <clippath id="circleView">
            <circle cx="100" cy="100" r="100" fill="#FFFFFF"/>            
        </clippath>
    </defs>
<image id="myBtn_yuan" width="200" height="200" xlink:href="images/yuan.jpg" clip-path="url(#circleView)"/></li>
<!-- The Modal -->
<div id="myModal_yuan" class="modal">
  <!-- Modal content -->
  <div class="modal-content">
    <span class="close">&times;</span>
    <image src="/web/20171025213906im_/https://think.mit.edu/images/yuan.jpg" width="200" height="200" align="left"/>
    <br>
    <h1>Yuan Lee</h1>
    <h4>Class of 2021 | Electrical Engineering and Computer Science</h4><br><br><br><br>

    <p>Yuan is a freshman from Singapore who intends to major in Electrical Engineering and Computer Science, but is in reality interested in too many things to decide. Research projects were a big part of his high school experience, and he had the fortune of meeting great mentors who inspired him to dive into STEM. He wants to spread the joy and help young students explore their subjects of interest, in the hopes that they, too, discover the passions of their lives.</p>
  </div>
</div>
<script>
// Get the modal
var modal_yuan = document.getElementById('myModal_yuan');
// Get the button that opens the modal
var btn_yuan = document.getElementById("myBtn_yuan");
// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[13];
// When the user clicks the button, open the modal 
btn_yuan.onclick = function() {
    modal_yuan.style.display = "block";
}
// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal_yuan.style.display = "none";
}
</script>
</ul>

</section>



  <section id="sponsors">

      <div class="title">
        SPONSORS

         
        </div>
      </div>
      <center><img id="reuters-logo" src="/web/20171025213906im_/https://think.mit.edu/images/reuters-logo-2.png"/></center>
        <br>
        <p class="contact-info">
          If you have any questions, concerns, or suggestions, feel free to email us at <a href="think@mit.edu"> think@mit.edu </a>.
        </p>
      </div>

      <div style="clear:both"></div>
      
      </div>
      
  </section>

  <footer>
    
    <div class="icons">
      <a href="https://web.archive.org/web/20171025213906/mailto:think@mit.edu"><i class="fa fa-envelope fa-2x"></i></a>
      <a href="https://web.archive.org/web/20171025213906/https://www.facebook.com/MIT-THINK-Scholars-Program-80872600025/?fref=ts" target="_blank"><i class="fa fa-facebook fa-2x"></i></a>
      <a href="https://web.archive.org/web/20171025213906/https://twitter.com/mit_think" target="_blank"><i class="fa fa-twitter fa-2x"></i></a>
    </div>
    <div class="copyright">
      &copy; <a href="https://web.archive.org/web/20171025213906/http://think.mit.edu/" target="_blank">MIT THINK</a> 2017. Powered by <a href="https://web.archive.org/web/20171025213906/http://techx.mit.edu/" target="_blank">TechX</a>.
    </div>
    <div class="elevator">
      <a id="elevator" href="#main">Back to top</a>
    </div>
  </footer>
</body>



</html>