"use client";

import { useEffect, useState } from "react";

export default function Home() {

    const [qr, setQr] =
        useState<string | null>(null);

    useEffect(() => {

        const interval = setInterval(
            async () => {

                try {

                    const res =
                        await fetch(
                            "/api/connect"
                        );

                    if (!res.ok) {
                        return;
                    }

                    const data =
                        await res.json();

                    setQr(
                        data.qr ?? null
                    );

                } catch (err) {

                    console.error(
                        "FETCH ERROR",
                        err
                    );
                }

            },
            3000
        );

        return () =>
            clearInterval(interval);

    }, []);

    return (

        <div style={{ padding: 40 }}>

            <h1>
                WhatsApp Gateway
            </h1>

            {
                qr && (
                    <img
                        src={`https://api.qrserver.com/v1/create-qr-code/?size=300x300&data=${encodeURIComponent(qr)}`}
                        width={300}
                        alt="qr"
                    />
                )
            }

        </div>
    );
}
