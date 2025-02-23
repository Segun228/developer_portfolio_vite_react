export default function Contacts(params) {
    return(
    <>
    <main className="section">
        <div className="container">
                <h1 className="title-1">Contacts</h1>

                <ul className="content-list">
                    <li className="content-list__item">
                        <h2 className="title-2">Location</h2>
                        <p>Moscow, Russia</p>
                    </li>
                    <li className="content-list__item">
                        <h2 className="title-2">Telegram / WhatsApp</h2>
                        <p><a href="tel:+79031290714">+7 (903) 128-02-14</a></p>
                    </li>
                    <li className="content-list__item">
                        <h2 className="title-2">Email</h2>
                        <p><a href="mailto:segunperkele@gmail.com">segunperkele@gmail.com</a></p>
                    </li>
                </ul>

        </div>
    </main>
    </>
);};
