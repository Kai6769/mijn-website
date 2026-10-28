
const SUPABASE_URL = "https://JOUW-PROJECT.supabase.co";
const SUPABASE_KEY = "sb_publishable_JOUW-SLEUTEL";

async function registreerBezoek() {
  try {
    const response = await fetch(
      `${SUPABASE_URL}/functions/v1/log-visit`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "apikey": SUPABASE_KEY
        },
        body: JSON.stringify({})
      }
    );

    const result = await response.json();

    if (!response.ok) {
      throw new Error(result.error || "Registratie mislukt");
    }

    console.log("Bezoek geregistreerd!");
  } catch (error) {
    console.error(error);
  }
}

registreerBezoek();
