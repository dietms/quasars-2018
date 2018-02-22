---
layout: default
custom_css: home.css
---

<section id="home" class="hero valign-wrapper">
  <div class="right-align container">
    <!-- <h1 class="typography--display4">quasars 2018</h1> -->
    <img src="/assets/img/quasars_logo.png" alt="quasars 2018" style="max-width: 70%;">
    <h4 class="typography--display1">Annual Social Gathering.</h4>
    <h5 class="typography--headline">February 22-24, 2018.</h5>
  </div>
  <span id="scroll-down" class="animation-bounce typography--relaxed">
    <a class="btn-floating white">
      <i class="material-icons black-text">keyboard_arrow_down</i>
    </a>
    scroll down for more info...
  </span>
</section>

<div class="teal accent-4 z-depth-5">
  <section id="about" class="container">
    <h3>About Quasars.</h3>
    <p class="typography--relaxed">
      Quasars is the annual festival of Deogiri Institute of Engineering and Management Studies. In this event, the student of
      DIEMS take part in various cultural, social and sports events such as Mono-acting, Solo Dance, Group Dance, Duet Performance,
      Fashion Show, Duet Singing, Guitar Act and Drama, etc.
    </p>
    <br>
  </section>
</div>

<div>
  <section id="events" class="container">
    <h3>Events.</h3>
    <ul class="tabs tabs-fixed-width row">
      <li class="tab col s4">
        <a href="#mainstageevents" class="active typography--reset">Main Stage.</a>
      </li>
      <li class="tab col s4">
        <a href="#innerevents" class="typography--reset">Inner Events.</a>
      </li>
      <li class="tab col s4">
        <a href="#sportsevents" class="typography--reset">Sports Events.</a>
      </li>
    </ul>
    <div class="row">
      <div id="mainstageevents" class="col s12">
        <div class="row">
          {% for event in site.data.events.main_stage %}
            <div class="col s12 m4">
              <div class="typography--title">{{ event.name }}</div>
              <!-- <div class="event-block">
                <span class="event--title">{{ event.name }}</span>
              </div> -->
            </div>
          {% endfor %}
        </div>

      </div>
      <div id="innerevents" class="col s12">
        <div class="row">
          {% for event in site.data.events.inner_events %}
            <div class="col s12 m4">
              <div class="typography--title">{{ event.name }}</div>
            </div>
          {% endfor %}
        </div>
      </div>
      <div id="sportsevents" class="col s12">
          {% for event in site.data.events.sports %}
          <div class="col s12 m4">
            <div class="typography--title">{{ event.name }}</div>
          </div>
        {% endfor %}
      </div>
    </div>
  </section>
</div>

<div>
  <section id="schedule" class="container">
    <h3>Schedule.</h3>
    <div class="row">
      <div class="col s12">
        <ul class="tabs tabs-fixed-width">
          <li class="tab"><a href="#feb-15" date="2018-02-15">Feb 15.</a></li>
          <li class="tab"><a href="#feb-16" date="2018-02-16">Feb 16.</a></li>
          <li class="tab"><a href="#feb-17" date="2018-02-17">Feb 17.</a></li>
          <li class="tab"><a href="#feb-18" date="2018-02-18">Feb 18.</a></li>
          <li class="tab"><a href="#feb-20" date="2018-02-20">Feb 20.</a></li>
          <li class="tab"><a href="#feb-21" date="2018-02-21">Feb 21.</a></li>
          <li class="tab"><a href="#feb-22" date="2018-02-22">Feb 22.</a></li>
          <li class="tab"><a href="#feb-23" date="2018-02-23">Feb 23.</a></li>
          <li class="tab"><a href="#feb-24" date="2018-02-24">Feb 24.</a></li>
        </ul>
      </div>

      {% for day in site.data.schedule %}
      <div id="{{ day.id }}" class="col s12">
        <h3 class="typography--subheading2 typography--italic">{{ day.quasars_day }}</h3>
        <ul class="collection">
          {% for event in day.events %}
          <li class="collection-item">
            <div class="title">
              <span class="typography--title">{{ event.event_name }}</span>
              <span class="right typography--body1 typography--italic">{{ event.time }}</span>
            </div>
            <span class="typography--body1">{{ event.place }}</span>
          </li>
          {% endfor %}
        </ul>
      </div>
      {% endfor %}
    </div>
  </section>
</div>

<div class="teal accent-4 z-depth-5">
  <section id="faq" class="container">
    <h3>FAQ.</h3>
    <ul class="collapsible typography--relaxed z-depth-0">
      <li>
        <div class="collapsible-header typography--body2"><i class="material-icons">keyboard_arrow_down</i>I'm not a student of DIEMS, can I still attend the event?</div>
        <div class="collapsible-body">No. Quasars is the Annual Social Gathering of DIEMS, so only the students of DIEMS are permitted.</div>
      </li>
      <li>
        <div class="collapsible-header typography--body2"><i class="material-icons">keyboard_arrow_down</i>Is there any registration fees / passes for the event?</div>
        <div class="collapsible-body">No. Quasars is completely free for the students.</div>
      </li>
      <li>
        <div class="collapsible-header typography--body2"><i class="material-icons">keyboard_arrow_down</i>FAQ 3</div>
        <div class="collapsible-body">FAQ Body 3</div>
      </li>
      <li>
        <div class="collapsible-header typography--body2"><i class="material-icons">keyboard_arrow_down</i>FAQ 4</div>
        <div class="collapsible-body">FAQ Body 4</div>
      </li>
      <li>
        <div class="collapsible-header typography--body2"><i class="material-icons">keyboard_arrow_down</i>FAQ 5</div>
        <div class="collapsible-body">FAQ Body 5</div>
      </li>
    </ul>
  </section>
</div>