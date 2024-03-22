import { useState, useEffect } from 'react';
import axios from 'axios';

export const fetchAccessToken = () => {
    const [accessToken, setAccessToken] = useState<string>("");
    const apiKey = process.env.NEXT_PUBLIC_PETFINDER_API;
    const secret = process.env.NEXT_PUBLIC_SECRET;

    useEffect(() => {
        const fetchToken = async () => {
            try {
                if (!apiKey || !secret) {
                    throw new Error("credentials missing");
                };

                const response = await axios.post("https://api.petfinder.com/v2/oauth2/token", {
                    grant_type: "client_credentials",
                    client_id: apiKey,
                    client_secret: secret
                });

                setAccessToken(response.data.access_token);
            } catch (error) {
                console.error(error);
            }
        }
        fetchToken();
    }, []);

    return accessToken;
}