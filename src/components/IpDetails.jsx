const IpDetails = ({ detailsObj }) => {
    return (
        <div id="ip-details">
            <div className="detail">
                <p>IP ADDRESS</p>
                <h2>{detailsObj.ip}</h2>
            </div>

            <div className="detail">
                <p>LOCATION</p>
                <h2>{detailsObj?.location?.region}, {detailsObj?.location?.country}</h2>
            </div>

            <div className="detail">
                <p>TIMEZONE</p>
                <h2>GMT {detailsObj?.location?.timezone}</h2>
            </div>

            <div className="detail">
                <p>ISP</p>
                <h2>{detailsObj.isp}</h2>
            </div>

        </div>
    );
}

export default IpDetails;