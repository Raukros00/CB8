import NavBar from "../../components/navBar";
import styles from "./index.module.scss";

export default function Privacy() {
  return (
    <>
      <NavBar />
      <div className={styles.PrivacyArea}>
        <div className={styles.Wrapper}>
          <h3 className={styles.Title}>
            Paragrafo 1: L'Inizio di un Romanzo Digitale
          </h3>
          <p>
            Benvenuti nel capitolo più entusiasmante della vostra vita: la
            nostra informativa sulla privacy! Si tratta di un'avventura
            emozionante, dove i vostri dati diventano i protagonisti di un
            romanzo digitale senza precedenti. Pronti a svelare i dettagli più
            piccanti della vostra esistenza online? Strapazzatevi, perché questa
            è la vostra unica via di fuga!
          </p>
          <h3 className={styles.Title}>
            Paragrafo 2: Cookies Magici e Pixel Misteriosi
          </h3>
          <p>
            Siamo orgogliosi di presentarvi i nostri "Cookies Magici" e "Pixel
            Misteriosi" - i sidekick invisibili della vostra navigazione online.
            Questi piccoli assistenti trasformano ogni clic e pagina visitata in
            monete d'oro digitali, che, naturalmente, vengono conservate nel
            nostro forziere segreto. Ah, ma non preoccupatevi, sono solo
            dettagli insignificanti della vostra vita digitale, giusto?
          </p>
          <h3 className={styles.Title}>
            Paragrafo 3: Termini e Condizioni – Una Sinfonia Legale
          </h3>
          <p>
            Entriamo ora nel territorio epico dei "Termini e Condizioni" – una
            sinfonia legale che nessuno ha mai letto fino in fondo. Qui,
            viaggiate attraverso paragrafi interminabili e clausole astruse,
            accompagnati dalla musica trionfante dei vostri diritti che
            svaniscono lentamente nel nulla. Ma tranquilli, è tutto per la
            vostra sicurezza... forse.
          </p>

          <h4 className={styles.Title}>Paragrafo 4: Acconsenti o Fuggi</h4>
          <p>
            Nel caso foste tentati di sfuggire a questo avvincente racconto, vi
            avvertiamo che la nostra unica via di fuga è il pulsante
            "Acconsenti". Resistere è inutile, perché il destino è già stato
            scritto nei vostri cookie. E non dimenticate: ogni volta che
            cliccate su "Accetta", un angelo dei dati ottiene le sue ali... o
            qualcosa del genere.
          </p>

          <h3 className={styles.Title}>
            Gadget Tecnologici Rivoluzionari: Un Mondo di Innovazioni
          </h3>
          <div className={styles.SpecialPolicy}>
            <div className={styles.SinglePolicy}>
              <h5>Occhiali del Futuro</h5>
              <p>
                Indossate questi occhiali e vi ritroverete catapultati in un
                mondo dove la realtà aumentata si fonde con la vita quotidiana.
                Guardate un albero e ottenete informazioni dettagliate sulla
                specie, o semplicemente trasformate la vostra passeggiata in
                un'epica battaglia di realtà virtuale.
              </p>
            </div>

            <div className={styles.SinglePolicy}>
              <h5>Smart Tostapane</h5>
              <p>
                Addio alle banali fette di pane abbrustolite! Il nostro
                tostapane intelligente analizza il vostro umore del mattino e
                crea un abbinamento unico di croccantezza e doratura per
                soddisfare le vostre esigenze emotive. Avvertimento: potreste
                sviluppare una relazione emotiva con il vostro tostapane.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
