import React from 'react'

export default function ExperienceDetails() {
    return (
        <div style={{ margin: "2%" }}>
            <div class="row">
                <div class="col-2"></div>
                <div class="col-8" style={{ textAlign: "center" }}>
                    <h1>Trip Name</h1>
                </div>
                <div class="col-2"></div>
            </div>

            <div class="row">
                <div class="col-2"></div>
                <div class="col-8" style={{ textAlign: "center" }}>
                    <img src='https://www.inmysore.com/images/mysore-attractions/mysore-palace/mysore-palace-full-illuminated.jpg' alt='Image Tag'></img>
                </div>
                <div class="col-2"></div>
            </div>
            <br></br>
            <div class="container">
                <div class="row">
                    <div class="col-3"></div>
                    <div class="col-6 border bg-light">
                        <div class="row">
                            <div class="col-12">
                                Name of Hotel: Hotel xyz
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-6">
                                Start Date: 1/1/2001
                            </div>
                            <div class="col-6">
                                End Date: 6/6/2001
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-12">
                                Places Visited: Delhi, Paris,  etc..
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-12">
                                Total Cost: 9999
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-12">
                                Trip Type: Backpacking
                            </div>
                        </div>
                    </div>
                    <div class="col-3"></div>
                </div>
            </div>
            <br></br>
            <div class="row">
                <div class="col-1"></div>
                <div class="col-10" style={{textAlign:'justify'}}>
                    Mysore Palace, also known as Amba Vilas Palace, is a historical palace and a royal residence. It is located in Mysore, Karnataka, India. It used to be the official residence of the Wadiyar dynasty and the seat of the Kingdom of Mysore. The palace is in the centre of Mysore, and faces the Chamundi Hills eastward. Mysore is commonly described as the 'City of the Palaces', and there are seven palaces including this one. However, the Mysore Palace refers specifically to the one within the new fort.
                    <br></br>
                    The land on which the palace now stands was originally known as mysuru (literally, "citadel"). The first palace inside the Old Fort was built in the 14th century, which was set ablaze and reconstructed multiple times. The Old Fort was built of wood and thus easily caught fire, while the current fort was built of stone, bricks and wood. The current structure was constructed between 1897 and 1912, after the Old Palace burnt down, the current structure is also known as the New Fort. Mysore Palace is one of the most famous tourist attractions in India, after the Taj Mahal, with more than three million annual visitors as on 2014.[1]
                </div>
                <div class="col-1"></div>

            </div>
        </div>
    )
}
