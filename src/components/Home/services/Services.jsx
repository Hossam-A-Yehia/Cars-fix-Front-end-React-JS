import "./services.css"
import fixHome from "../../imgs/servicesImg/fix_home.png"
import orderMechanic from "../../imgs/servicesImg/order_mechanic.png"
import winshat from "../../imgs/servicesImg/winshat.png"
import insurance from "../../imgs/servicesImg/insurance.png"

function Services() {
    return (
        <section className="services " id="services">
            <h2 className="main-title " data-aos="flip-left">خدماتنا</h2>
            <p className='spacialP ' data-aos="flip-left">تعلم أوتو راب مدى اهمية السيارة في الحياة اليومية، وانها معرضة للعطل بأي وقت ومكان، لذلك تخصص فريقنا بالاعتناء بالسيارات من خلال هذه الخدمات: </p>
            <div className='container'>
                <div data-aos="fade-left" className="services__box ">
                    <figure className="services__icon">
                        <img src={fixHome} alt="fixHome" />
                    </figure>
                    <div className="services__content">
                        <h2 className="services__title">
                            اصلحلك عربيتك
                        </h2>
                        <p className="services__description">
                            يبدأ الحفاظ على أمان بياناتك بفهم الآلية التي يتّبعها مطوِّرو البرامج لجمع بياناتك ومشاركتها. قد تختلف خصوصية البيانات وممارسات الأمان حسب آلية استخدامك للتطبيق ومنطقتك وعمرك. يوفّر مطوِّر البرامج هذه المعلومات وقد يعدِّلها بمرور الوقت.
                        </p>
                    </div>
                </div>
                <div className="services__box" data-aos="fade-right">
                    <figure className="services__icon">
                        <img src={orderMechanic} alt="orderMechanic" />
                    </figure>
                    <div className="services__content">
                        <h2 className="services__title">
                            اطلب ميكانيكي لعندك
                        </h2>
                        <p className="services__description">
                            اصلحلك هي الشركة المالكة لتطبيق الاول من نوعه في الوطن العربي لخدمة السيارات على الطريق، والتي تتكون من فريق عمل يهدف لإحداث ثورة في عالم تصليح السيارات، وايصال كل صاحب مركبة                        </p>
                    </div>
                </div>
                <div className="services__box" data-aos="fade-left">
                    <figure className="services__icon">
                        <img src={winshat} alt="winshat" />
                    </figure>
                    <div className="services__content">
                        <h2 className="services__title">
                            ونش
                        </h2>
                        <p className="services__description">
                            ستسعد اصلحلك بانضمامك لها، فاذا كنت صاحب كراج في الاردن لتصليح وصيانة السيارات، يمكنك تعبئة معلوماتك هنا لنتمكن من التواصل معك بأقرب وقت ممكن:
                        </p>
                    </div>
                </div>
                <div className="services__box" data-aos="fade-right">
                    <figure className="services__icon">
                        <img src={insurance} alt="insurance" />
                    </figure>
                    <div className="services__content">
                        <h2 className="services__title">
                            نرخصلك ونأمنلك سيارتك
                        </h2>
                        <p className="services__description">
                            اصلحلك هي الشركة المالكة لتطبيق الاول من نوعه في الوطن العربي لخدمة السيارات على الطريق، والتي تتكون من فريق عمل يهدف لإحداث ثورة في عالم تصليح السيارات، وايصال كل صاحب مركبة
                        </p>
                    </div>
                </div>


            </div>
        </section>
    )
}

export default Services