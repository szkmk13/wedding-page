import "leaflet/dist/leaflet.css";

export default function Map() {
  const key = process.env.NEXT_PUBLIC_GOOGLE_API_KEY;
  return (
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m26!1m12!1m3!1d37851.43404517658!2d19.611485598361487!3d53.634228798072364!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m11!3e0!4m5!1s0x471d6823a1e507cf%3A0x5ba11885bbcf9543!2zS2_Fm2Npw7PFgiBSenltc2tva2F0b2xpY2tpIHB3LiBUcsOzamN5IFByemVuYWrFm3dpxJl0c3plaiwgRnJlZG5vd3ksIDE0LTIwMA!3m2!1d53.6558935!2d19.6897745!4m3!3m2!1d53.6134012!2d19.613871!5e0!3m2!1spl!2spl!4v1741608593730!5m2!1spl!2spl"
      
      className="h-64 sm:h-96 w-full"
      allowFullScreen={true}
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
    ></iframe>
  );
}
