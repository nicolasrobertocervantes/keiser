<?php
$fields_string = '';
foreach( $_POST as $key => $value ){
	$fields_string .= $key.'='.$value.'&';
}
rtrim( $fields_string, '&' );

$ch = curl_init();
curl_setopt($ch, CURLOPT_URL, 'http://services.graggadv.com/lead-gateway/' );
curl_setopt($ch, CURLOPT_VERBOSE, 0);
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
curl_setopt($ch, CURLOPT_HTTP_VERSION, CURL_HTTP_VERSION_1_1);
curl_setopt($ch, CURLOPT_HTTPHEADER, array('Content-Type: application/x-www-form-urlencoded') );
curl_setopt($ch, CURLOPT_POST, 1);
curl_setopt($ch, CURLOPT_POSTFIELDS, $fields_string);
$x = curl_exec($ch);
curl_close($ch);
?>

<!DOCTYPE html>
<html>
<head>
  <!-- Google tag (gtag.js) -->
  <script async src=https://www.googletagmanager.com/gtag/js?id=AW-1062123661></script>
  <script> window.dataLayer = window.dataLayer || []; function gtag(){dataLayer.push(arguments);} gtag('js', new Date()); gtag('config', 'AW-1062123661'); </script>
  
  <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0">
  <meta name="HandheldFriendly" content="True">

  <title>Keiser University eCampus en Español</title>
  <link rel="stylesheet" type="text/css" href="css/master.css">
  <link rel="stylesheet" type="text/css" href="css/styles.css">

  <!--[if lt IE 9]>
  <script language="javascript" type="text/javascript" src="js/modernizr.js"></script>
  <script language="javascript" type="text/javascript" src="js/respond.min.js"></script>
  <link rel="stylesheet" type="text/css" media="all" href="css/desktop.css">
  <![endif]-->
  <script type="text/javascript" src="js/jquery.min.js"></script>
</head>
<body class="home">

<nav id="mobile-nav">
	<div class="container">
    <a href="index.php" class="first-nav-item kuSections">&iquest;Por qu&eacute; elegir Keiser?</a>
    <a id="mobile-nav-menu-button" href="programas.php">Programas</a>
	</div><!-- / .container -->
</nav>

<header>
	<section id="header-container" class="container">
		<a class="kuSections" href="index.php" id="logo"></a>
        <a id="hdrllamanos"></a>
	</section><!-- / #header-container -->
</header>

<nav id="top-nav">
  <a class="kuSections" href="index.php">&iquest;Por qu&eacute; elegir Keiser?</a>
  <a class="kuSections" href="programas.php">Programas</a>
  <a class="kuSections" href="acreditacion.php">Acreditaci&oacute;n</a>
</nav><!-- / #top-nav -->

<section id="feature-block">
	<div id="feature" class="">
		<div class="container">
			<a id="mobile-form-button" href="#"></a>

      <?php include 'form.php'; ?>

		</div><!-- / .container -->
	</div><!-- / #feature -->
</section><!-- / #feature-block -->

<script type="text/javascript">
	$("#form-step-1").hide();
	$("#form-step-2").hide();
	$("#form-step-3").show();
</script>

<div id="mobile-feature"></div>

<section id="main" class="container">
  <section id="main-content">
<span class="contentSpacer"><br /></span><br />
	  <h1>Keiser University en Línea</h1><br />
    <p style="font-weight:bold;">Por más de 35 años, Keiser University ha mantenido una modalidad práctica en la educación de carreras, para así ayudar a los estudiantes a alcanzar sus metas personales y profesionales.</p>
    <p>Para los que busquen cumplir sus objetivos académicos de manera conveniente y flexible, Keiser University eCampus les ofrece la opción más adecuada.</p>

    <h2>Por qué estudiar en Keiser</h2>
    <ul>
      <li>&nbsp; Programas de una asignatura a la vez al mes.</li>
      <li>&nbsp; El estudiante está primero. Nuestro enfoque principal es el alumno.</li>
      <li>&nbsp; Cupos limitados. Creemos que la atención individualizada crea un ambiente más apropiado para el aprendizaje.</li>
      <li>&nbsp; Ofrecemos programas de asociados, licenciaturas, maestrías y doctorados en línea y en español.</li>
      <li>&nbsp; Asistencia al alumno. Te ayudamos a encontrar la carrera perfecta para ti.</li>
    </ul>
	  <p>Keiser University es una de las Universidades privadas más grandes de Florida, EE.UU. <br />El enfoque de sus programas se centra en el estudiante, con planes de estudios que siguen los cambios de la tecnología y las tendencias que demanda el mercado laboral actual.</p>
    <a class="kuSections" href="acreditacion.php">Ver más...</a>-->
	</section><!-- / #main-content -->


	<section id="secondary-content" class="clearfix">
    <span class="contentSpacer"><br /></span><br />
    <h2>Historias de &Eacute;xito</h2>
			<p class="quote">Sin duda, su guía e interés en mi aprovechamiento académico, fueron elementos claves para desarrollar en mí un compromiso solido con mis estudios, "<span class="more"> y esforzarme para sobrellevar los obstáculos que se presentan cuando uno trabaja y tiene familia."</span></p><p class="author">Eduardo J. P. Graduado del programa Licenciatura en Administración de Empresas</p>
      <p class="quote">Además de tener  un excelente equipo de profesionales capaces de ayudarnos todo el tiempo "<span class="more">y siempre preocupados por nuestro avance dentro del curso, en verdad estoy muy orgullosa de poder ser parte de Keiser University y de estar dentro del programa."</span></p><p class="author">Elizabeth M. Alumna de Keiser University eCampus</p>
	</section> <!-- / #secondary-content -->

</section><!-- / .container -->

<footer>
  <nav>
    <span>
            <a class="kuSections" href="index.php">&iquest;Por qu&eacute; elegir Keiser?</a> <span> :: </span>
            <a class="kuSections" href="programas.php">Programas</a> <span> :: </span>
      </span>
    <span>
          <a class="kuSections" href="acreditacion.php">Acreditaci&oacute;n</a> <span> :: </span>
          <a href="http://www.keiseruniversity.edu/politica_de_privacidad.htm" target="_blank">POLÍTICA DE PRIVACIDAD</a>
        </span>
  </nav>

  <nav id="mobile-nav">
    <span>
            <a class="kuSections" href="index.php">&iquest;Por qu&eacute; elegir Keiser?</a> <span> :: </span>
            <a class="kuSections" href="programas.php">Programas</a>
        </span>
        <span>
            <a class="kuSections" href="acreditacion.php">Acreditaci&oacute;n</a> <span> :: </span>
            <a href="http://www.keiseruniversity.edu/politica_de_privacidad.htm" target="_blank">POLÍTICA DE PRIVACIDAD</a>
        </span>
  </nav>

    <p style="padding-top:5px;"><small>&copy;2016 Keiser University.</small></p>
</footer>

<!-- insert scripts here -->
<script src="js/scripts.js" type="text/javascript" charset="utf-8"></script>

<!-- New Atlas Tags Step03 -->
<script type="text/javascript">
$(document).ready(function() {
	
	var Program = '<?php echo $_POST['program']; ?>';
	
	switch(Program){
		case "DBAS":   Program = 'DBA'; break;
		case "MBAS":   Program = 'MBA'; break;
		case "MSMS":   Program = 'MSMAN'; break;
		case "BABAS":   Program = 'BACHELORS-BA'; break;
		case "BAHSAS":   Program = 'BAHSAS'; break;
		case "BABAS-MKT":   Program = 'BACHELORS-BA-MKT'; break;
		case "BABAS-FIN":   Program = 'BACHELORS-BA-FIN'; break;
		case "BABAS-MAN":   Program = 'BACHELORS-BA-MGT'; break;
		case "BABAS-IBT":   Program = 'BACHELORS-BA-INT'; break;
		case "ESOL":   Program = 'ESOL'; break;
	}
	
	var windowWidth = $(window).width();
	
	if (windowWidth < 420) {
		$("#newAtlasTag").attr("src","//ad.atdmt.com/m/a.js;m=11082201078791;cache="+Math.random()+"?program="+Program+"&order_id="+OrderID+"&event=thankyoumobile");
	} else {
		$("#newAtlasTag").attr("src","//ad.atdmt.com/m/a.js;m=11082201078791;cache="+Math.random()+"?program="+Program+"&order_id="+OrderID+"&event=thankyoudesktop");
	}

  // Facebook Pixel Code Step3
  !function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?
  n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;
  n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0;
  t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}(window,
  document,'script','https://connect.facebook.net/en_US/fbevents.js');
  fbq('init', '138547363233597');
  fbq('track', "PageView")
  fbq('track', 'CompleteRegistration', {
    content_name: Program,
    order_id: OrderID
  });
	
});
</script>

<!-- Tag Google Analytics -->
<script type="text/javascript">
  var _gaq = _gaq || [];
  _gaq.push(['_setAccount', 'UA-23250856-1']);
  _gaq.push(['_trackPageview']);

  (function() {
    var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
    ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
    var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
  })();
</script>

<!-- New Google Analytics Jan03,2017 -->
<script>
  (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
  })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

  ga('create', 'UA-89732320-1', 'auto');
  ga('send', 'pageview');
</script>
 
<!-- Google Code for Remarketing Tag -->
<script type="text/javascript">
/* <![CDATA[ */
var google_conversion_id = 1062123661;
var google_custom_params = window.google_tag_params;
var google_remarketing_only = true;
/* ]]> */
</script>
<div style="display:none;">
	<script type="text/javascript" src="//www.googleadservices.com/pagead/conversion.js"></script>
</div>
<noscript>
<div style="display:inline;">
<img height="1" width="1" style="border-style:none;" alt="" src="//googleads.g.doubleclick.net/pagead/viewthroughconversion/1062123661/?value=0&amp;guid=ON&amp;script=0"/>
</div>
</noscript>

</body>
</html>