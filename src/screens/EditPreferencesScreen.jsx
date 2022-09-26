import React, {useState, useEffect} from "react";
import Footer from "../components/Footer.jsx";
import Header from "../components/Header.jsx";
import EditPreferences from "../components/EditPreferences.jsx";

function EditPreferencesScreen(props) {
    return (<div>
        <Header />
        <EditPreferences />
        <Footer />
    </div>);
}

export default EditPreferencesScreen;