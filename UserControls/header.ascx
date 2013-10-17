<% @ Control Language="C#" ClassName="header" %>
<%@Register tagprefix="tme" Tagname="nav" src="~/usercontrols/nav.ascx" %>
<!-- ############# Main Header ################# -->
<div id="fixed_header">

    <div class="container">

<div id="header" class="column sixteen">
        
          <div id="logo_wrap" class="six columns alpha">
            <a href="default.aspx" id="logo"><img src="images/matrix-logo.png" alt="Matrix Solutions Logo"/></a>
            <h2>Transform Chaotic Data Into Sales</h2>
          </div><!--/#logo_wrap -->
          
          <div id="nav_wrap" class="ten columns omega">
          
            <div id="contact_bar">
                <a href="contact-us.aspx">Contact Us</a>  |  <span class="phone_number">877.687.9066</span>
                <a href="demo.aspx" class="request_demo_link">Schedule Demo</a>
            </div>
            <!--/#contact_bar -->
            
            <nav id="main_nav">
              <tme:nav ID="mainnav" runat="server" />
            </nav><!--/#main_nav -->

          
          </div><!--/#nav_wrap -->
       
          <a href="#mobile_nav" class="menu_icon">Navigation</a>
          
          
          </div><!--/#header -->


    </div><!--/.container -->
       
</div><!--/#fixed_header -->


<div class="addthis-tab-fixed">

<div class="container" style="height:80px;">
<div id="addthis-tab">

<!-- AddThis Button BEGIN -->
<div class="addthis_toolbox addthis_default_style">
<a class="addthis_button_google_plusone" data-size="small" <%="g:plusone:count" %>="false"></a>
<a class="addthis_button_facebook"></a>
<a class="addthis_button_twitter"></a>
<a class="addthis_button_linkedin"></a>
<a class="addthis_button_email"></a>

<span class="share-arrow">Share</span>

</div><!--/.addthis_toolbox -->

</div><!--/#addthis-tab -->

</div><!--/.container -->
</div><!--/#addthis-tab-fixed -->

    <nav id="mobile_nav">
      <tme:nav ID="mobilenav" runat="server" />
    </nav><!--/#mobile_nav -->