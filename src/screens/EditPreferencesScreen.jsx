import React, {useState, useEffect} from "react";
import Footer from "../components/footer/Footer.jsx";
import Header from "../components/header/Header.jsx";
import EditPreferences from "../components/preferences/EditPreferences.jsx";

function EditPreferencesScreen(props) {
    return (<div>
        <Header />
        <EditPreferences />
        <Footer />
    </div>);
}

export default EditPreferencesScreen;
