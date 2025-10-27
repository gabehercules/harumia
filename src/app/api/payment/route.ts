import { NextRequest, NextResponse } from "next/server";

import { MercadoPagoConfig, Preference } from "mercadopago";

const client = new MercadoPagoConfig({
  accessToken: process.env.MP_ACCESS_TOKEN!,
  options: {
    timeout: 10000, // Tempo limite de 10 segundos
  },
});

const preferences = new Preference({
  accessToken: process.env.MP_ACCESS_TOKEN!,
});

export async function POST(req: NextRequest) {
  const body = await req.json();

  const preference = {
    items: [
      {
        title: body.title,
        quantity: 1,
        unit_price: Number(body.price),
        currency_id: "BRL",
      },
    ],
    payment_methods: {
      excluded_payment_types: [{ id: "credit_card" }, { id: "debit_card" }],
      default_payment_method_id: "pix",
    },
    notification_url: "https://SEU_SITE/api/notify", // Pode deixar vazio por enquanto
    back_urls: {
      success: "https://SEU_SITE/success",
      failure: "https://SEU_SITE/failure",
    },
    auto_return: "approved",
  };

  try {
    const response = await mercadopago.preferences.create(preference);
    return NextResponse.json({ init_point: response.body.init_point });
  } catch (err) {
    return NextResponse.json(
      { error: "Erro ao criar pagamento" },
      { status: 500 }
    );
  }
}
