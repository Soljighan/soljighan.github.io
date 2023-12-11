alert("Hello, This is My Resume. Click OK to View")

var typed= new Typed(".text",{
    strings: ["Graphic Designer" , "Calligrapher" ,"Artist" , "Painter" , "Web Developer"],
    typeSpeed: 50,
    backSpeed: 50,
    backDelay: 50,
    loop: true
})

<script>
  document.getElementById('navigationButton').addEventListener('click', function() {
    // Code to navigate to the designated area
    document.getElementById('designatedArea').scrollIntoView();
  });
</script>