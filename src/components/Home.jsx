import React from "react";
import "./Home.css";
import Banner from "./Banner";
import Card from "./Card";

function Home() {
    return (
        <div className='home'>
            <Banner />
            <div className='home__section'>
                <Card
                    src='https://www.wellandgood.com/wp-content/uploads/2020/04/GettyImages-1087045850.jpg'
                    title='Online Experiences'
                    description='Allow for virtual cultural experiences'
                    price='$24'
                />
                <Card
                    src='https://www.thechaoticscot.com/wp-content/uploads/2019/03/Ochils-Edge-1.jpeg'
                    title='Unique Stays'
                    description='The 9 most unusual and unique places to stay in bali'
                    price='$50'
                />
                <Card
                    src='https://www.skyhousedesigncentre.com/storage/images-processed/w-1600_h-900_m-cover_s-any__69-project-keller-opening-corner%20(2).jpg'
                    title='Entire Homes'
                    description='Move at the Push of a Button!'
                    price='$100'
                />
            </div>
            <div className='home__section'>
                <Card
                    src='https://static2.mansionglobal.com/production/media/article-images/a3f39d14792f1304cd05f0a641b5b354/large_B3-CJ756_1115lo_IM_20181114162608.jpg'
                    title='Penthouse in London'
                    description="In Brexit Britain, London's Empty New Penthouses Seek Owners "
                    price='$300/Night'
                />
                <Card
                    src='https://i.ytimg.com/vi/GnmZgeM42zQ/maxresdefault.jpg'
                    title='Bedroom Apartment'
                    description='Simple and Modern Two-Bedroom Apartment'
                    price='$60/Night'
                />
                <Card
                    src='https://structurecity.com/wp-content/uploads/2018/05/collins-14.jpg'
                    title='3 Bedroom Flats'
                    description='Block of 3 Bedroom Flats'
                    price='$1000'
                />
            </div>
        </div>
    );
}

export default Home;
