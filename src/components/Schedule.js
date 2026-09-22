import React from 'react';

const Schedule = () => {
    return (
        <div className="schedule">
            <h2>Store Hours / Heures d'ouverture</h2>
            <ul>
                <li>Monday / Lundi: 9:00 AM - 6:00 PM</li>
                <li>Tuesday / Mardi: 9:00 AM - 6:00 PM</li>
                <li>Wednesday / Mercredi: 9:00 AM - 6:00 PM</li>
                <li>Thursday / Jeudi: 9:00 AM - 8:00 PM</li>
                <li>Friday / Vendredi: 9:00 AM - 8:00 PM</li>
                <li>Saturday / Samedi: 10:00 AM - 5:00 PM</li>
                <li>Sunday / Dimanche: Closed / Fermé</li>
            </ul>
        </div>
    );
};

export default Schedule;