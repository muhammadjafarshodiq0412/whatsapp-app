import { NextResponse } from "next/server";

import {
    connectWhatsapp,
    getQrCode
} from "@/lib/whatsapp";

export async function GET() {

    await connectWhatsapp();

    return NextResponse.json({
        qr: getQrCode()
    });
}
