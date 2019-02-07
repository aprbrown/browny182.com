import React from 'react';

class Header extends React.Component {
    render() {
        return (
            <div id='hero-banner'>
                <div class='centred'>
                    <h1 class='primary hero'>BROWNY182</h1>
                    <ul class='social-links'>
                        <a href="https://twitter.com/browny182" target="_blank"><i class="fab fa-twitter twitter"></i></a>
                        <a href="https://www.instagram.com/browny182/" target="_blank"><i class="fab fa-instagram instagram"></i></a>
                        <a href="https://www.youtube.com/channel/UCvLP-nt_jUTRedEIzYgXDxQ" target="_blank"><i class="fab fa-youtube youtube"></i></a>
                        <a href="https://www.twitch.tv/browny182" target="_blank"><i class="fab fa-twitch twitch"></i></a>
                    </ul>
                </div>
                
            </div>
        );
    }
}

export default Header