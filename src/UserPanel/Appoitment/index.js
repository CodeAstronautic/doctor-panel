import axios from "axios";
import React, { useEffect, useState } from "react";
import "./index.css"
export default function Appoitment() {
    const [doctorsList, setDoctorsList] = useState();
    console.log(doctorsList, "doctorsList");
    useEffect(() => {
        axios
            .get(`${process.env.REACT_APP_ENV}/api/doctors-list`)
            .then((data) => {
                setDoctorsList(data?.data);
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);
    return (
        <div>
            {doctorsList?.map((data) => {
                console.log(data);
                return (
                    <div class="u-d-flex">
                        <div>
                            <div class="u-d-inlineblock u-t-center">
                                <div class="u-pos-has profile-photo ">
                                    <div class="LazyLoad is-visible" style={{ height: "140px" }}>
                                        <img
                                            src="https://imagesx.practo.com/providers/7b10f696-d01a-45b6-a236-0bf6152403dd.jpg?i_type=t_100x100"
                                            alt="Dr. Meeka Gulati Dentist in Delhi"
                                            data-qa-id="doctor_profile_photo"
                                            class="u-circle profile-photo"
                                        />
                                    </div>
                                    <span class="prime-badge" data-qa-id="prime_badge">
                                        <img src="//www.practostatic.com/web-assets/images/prime_badge.8f4ca26c7f36.svg" />
                                    </span>
                                </div>
                                <button
                                    class="u-t-capitalize u-bold view-profile"
                                    data-qa-id="View Profile_button"
                                >
                                    View Profile
                                </button>
                            </div>
                        </div>
                        <div class="info-section">
                            <a href="/delhi/doctor/dr-meeka-gulati-dentist-3?practice_id=722421&amp;specialization=Dentist&amp;referrer=doctor_listing">
                                <div class="u-color--primary uv2-spacer--xs-bottom">
                                    <h2 data-qa-id="doctor_name" class="doctor-name">
                                        {data?.name}
                                    </h2>
                                </div>
                            </a>
                            <div class="u-grey_3-text">
                                <div class="u-d-flex">
                                    <span>{data?.occupation}</span>
                                </div>
                                <div class="uv2-spacer--xs-top" data-qa-id="doctor_experience">
                                    <div>
                                        15&nbsp;<span>years experience overall</span>
                                    </div>
                                </div>
                            </div>
                            <div class="uv2-spacer--sm-top">
                                <div class="u-bold u-d-inlineblock u-valign--middle">
                                    <a href="/delhi/dentist/janakpuri">
                                        <span data-qa-id="practice_locality">Janakpuri</span>
                                        <span class="u-t-capitalize" data-qa-id="practice_city">
                                            Delhi
                                        </span>
                                    </a>
                                </div>
                                &nbsp;
                                <span class="u-dot-separator u-spacer--horizontal-less u-valign--middle"></span>
                                &nbsp;
                                <div class="u-d-inlineblock u-valign--middle">
                                    <a
                                        href="/Delhi/clinic/alpsdental-care-janak-puri-1"
                                        target="_blank"
                                    >
                                        <span
                                            class="u-c-pointer u-t-hover-underline"
                                            data-qa-id="doctor_clinic_name"
                                        >
                                            Alps Dental Care
                                        </span>
                                    </a>
                                </div>
                                <div class="uv2-spacer--xs-top">
                                    <span>
                                        <span data-qa-id="consultation_fee" class="">
                                            ₹500
                                        </span>{" "}
                                    </span>
                                    <span>Consultation fee at clinic</span>
                                </div>
                            </div>
                            <div class="uv2-spacer--md-top uv2-cushion--lg-top u-border-general-dashed-top--gray-10">
                                <div>
                                    <a
                                        href="/delhi/doctor/dr-meeka-gulati-dentist-3/recommended?practice_id=722421&amp;specialization=Dentist&amp;referrer=doctor_listing"
                                        target="_blank"
                                        class="uv2-spacer--md-right"
                                    >
                                        <span class="o-label--success u-bold">
                                            <i class="icon-ic_like_filled"></i>
                                            <span data-qa-id="doctor_recommendation">97% </span>
                                        </span>
                                    </a>
                                    <a
                                        href="/delhi/doctor/dr-meeka-gulati-dentist-3/recommended?practice_id=722421&amp;specialization=Dentist&amp;referrer=doctor_listing"
                                        target="_blank"
                                    >
                                        <span
                                            data-qa-id="total_feedback"
                                            class="u-bold u-t-underline"
                                        >
                                            <span>Patient Stories</span>
                                        </span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                );
            })}
        </div>
    );
}
// address: "noida"
// dob: "2021-11-10"
// email: "dashkamal@mailinator.com"
// id: 1
// mobile: "9846584616"
// name: "dash kamal"
// occupation: "doctor"
// sex: "male"
