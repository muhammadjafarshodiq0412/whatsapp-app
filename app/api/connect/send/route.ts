import { NextRequest, NextResponse } from "next/server";

import {
    getSocket
} from "@/lib/whatsapp";

export async function POST(
    req: NextRequest
) {

    try {

        const body =
            await req.json();

        const {
            number,
            message
        } = body;

        const sock =
            getSocket();

        if (!sock) {

            return NextResponse.json(
                {
                    success: false,
                    message: "WhatsApp not connected"
                },
                {
                    status: 500
                }
            );
        }

        const jid =
            `${number}@s.whatsapp.net`;

        await sock.sendMessage(
            jid,
            {
                text: message
            }
        );

        return NextResponse.json({
            success: true
        });

    } catch (err) {

        console.error(err);

        return NextResponse.json(
            {
                success: false
            },
            {
                status: 500
            }
        );
    }
}
