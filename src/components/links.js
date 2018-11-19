import React, { Component } from 'react';

const Links = function(props) {
  return (
    <div style={styles.links}>
      <span style={styles.link}><a target="_blank" href="http://spring-theory.bandcamp.com">Bandcamp</a></span>
      <span style={styles.link}><a target="_blank" href="http://soundcloud.com/spring-theory/">Soundcloud</a></span>
      <span style={styles.link}><a target="_blank" href="mailto:bonjour@spring-theory.com">Email</a></span>
    </div>
  );
}

const styles = {
  links: {
    marginBottom: '3vh',
    textDecoration: 'none',
    color: '#33999980'
  },
  link: {
    fontSize: '15px',
    marginRight: '12px'
  }
}

export default Links;
