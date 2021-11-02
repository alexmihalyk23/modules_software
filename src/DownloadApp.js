import React from 'react';
import AppApk from './app.apk'
import './DownloadApp.css'

const DownloadApp = () => {
return (
    <div>
        <center>

            <a href={AppApk} className="btn" download="from_site_to_app ">Download App</a>
        </center>

    </div>
)

};
export default DownloadApp