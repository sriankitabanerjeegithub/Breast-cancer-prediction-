
import React from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

function Learning() {
  return (
    <>
      <Navbar />

      <div
        className="min-h-screen bg-cover bg-top bg-no-repeat flex flex-col items-center justify-center px-4 py-16"
        style={{ backgroundImage: "url('/learn.avif')" }}
      >
        <h1 className="italic text-6xl font-bold text-black text-center mb-20 mt-30">
          <u>Take knowledge</u>, Stay aware
        </h1>

        <p className="text-4xl italic font-bold text-center text-black mb-6">
          What is Breast Cancer?
        </p>

        <div className=" text-center text-black max-w-4xl space-y-4 text-xl italic">
          <p>
            Breast cancer is a type of cancer that occurs when abnormal cells in the breast grow and multiply uncontrollably, forming a tumor.
          </p>
          <p>
            It's one of the most common cancers affecting women worldwide, but it can also occur in men. Breast cancer can develop in the milk ducts, lobules, or other tissues of the breast.
          </p>
          <p>
            While the exact causes of breast cancer are still unknown, certain risk factors such as family history, genetics, and lifestyle can increase a person's likelihood of developing the disease.
          </p>
          <p>
            Early detection through regular mammograms, self-exams, and clinical exams can significantly improve treatment outcomes and survival rates.
          </p>
          <p>
            If you're concerned about breast cancer or want to learn more, consult with a healthcare professional for personalized guidance and support.
          </p>
        </div>
      

      <p className="text-4xl italic font-bold text-center text-black mb-10 mt-10">
          What causes Breast Cancer?
        </p>


        <div className="text-black text-center max-w-4xl mt-1 ">
          <h2 className="text-4xl  italic mb-6 mr-50 mt-0.5">
           <u> Causes of Breast Cancer</u>
            </h2>
          <ul className="list-disc list-inside text-left text-lg space-y-2 italic">
            <li>Genetic mutations, especially in BRCA1 and BRCA2 genes</li>
            <li>Family history of breast or ovarian cancer</li>
            <li>Hormonal imbalances or long-term hormone replacement therapy</li>
            <li>Exposure to radiation at a young age</li>
            <li>Early menstruation (before age 12) or late menopause (after 55)</li>
            <li>Lifestyle factors such as lack of exercise, poor diet, or alcohol consumption</li>
            <li>Obesity, especially after menopause</li>
            <li>Older age — risk increases as you get older</li>
          </ul>
        </div>

        {/* Images Section */}
        <div className="mt-16 max-w-6xl w-full px-4">
          <h2 className="text-4xl font-bold italic text-black text-center mb-8">Visual Awareness</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
           <div>
            <img src="/img1.webp" alt="Awareness" className="rounded-2xl shadow-lg" />
            <p className="text-lg font-medium text-black">Triple-Negative Breast Cancer</p>
            </div>
            <div>
            <img src="/img2.webp" alt="Medical Info" className="rounded-2xl shadow-lg" />
            <p className="text-lg font-medium text-black">Hormone-Sensitive Breast Cancer</p>
            </div>
            <div>
            <img src="/img3.webp" alt="Support" className="rounded-2xl shadow-lg" />
            <p className="text-lg font-medium text-black">HER2-Positive Breast Cancer</p>
            </div>
          </div>
        </div>

        <h className="text-3xl font-bold mr-43 mt-15 italic">
         <li> 
          <u>Triple-Negative Breast Cancer</u>
          </li>
          </h>
         <div className="text-xl italic mr-60">
         <p>In up to 15% of breast cancers the tumor   </p>
         <p>cells are lacking estrogen or progesterone receptors</p>
         <p>and have only small amounts of the HER2 protein.</p>
         <p> Doctors call this type of breast cancer "triple negative."</p>
         <p> It tends to grow and spread faster than other types.</p>
         <p> Hormone therapy or targeted drugs aren't helpful for this type.</p>
         <p>But there are other treatment options,</p>
         <p> including surgery, chemotherapy, and radiation.</p>
         </div>


         <h className="text-3xl font-bold mr-43 mt-15 italic">
         <li> 
          <u>Hormone-Sensitive Breast Cancer</u>
          </li>
          </h>
         <div className="text-xl italic">
         <p>Some types of breast cancer are fueled by the hormones estrogen or progesterone. </p>
         <p>Your doctor will test for hormone receptors -- proteins that pick up signals from the hormone </p>
         <p>that tell cells to grow. A biopsy can show if a tumor has receptors for estrogen</p>
         <p> (it’s ER-positive) and progesterone (it’s PR-positive).</p>
         <p>About 2 out of 3 breast cancers are hormone sensitive. There are several </p>
         <p> medications that keep the hormones from causing further cancer growth.</p>
         <p>The image shows a molecular model of an estrogen receptor.</p>
         </div>

         <h className="text-3xl font-bold mr-43 mt-15 italic">
         <li> 
          <u>  HER2-Positive Breast Cancer</u>
          </li>
          </h>
         <div className="text-xl italic">
         <p>In about 20% of patients, breast cancer cells have too much of a  </p>
 
       <p>  protein called HER2/neu. It’s important to know whether a tumor is  </p>
 
        <p> HER2-positive, because there are special treatments for this type of cancer.</p>
        <p> A HER2-positive cell is illustrated here. Growth signals that are not normal are shown in green.</p>
         </div>
           
         <h className="text-5xl font-bold italic mt-20 ">
         <u> Precautions</u>
          </h>
          <div>
            <p className="mt-10 text-xl italic text-blue-700">Healthy Lifestyle</p>
            <p className="mt-6 text-3xl italic text-blue-600">Women's Health</p>

            <p className="mt-10 text-3xl italic">Breast cancer prevention : How to reduce your risk</p>

            <p className="mt-10 text-2xl italic text-blue-500">Breast cancer prevention starts with healthy habits — such as limiting alcohol and staying physically active. Learn what you can do to lower your breast cancer risk.</p>
            <p className="mt-10 text-3xl italic">What can I do to lower my risk of breast cancer?</p>
          <p className="mt-10 text-2xl italic ">Research shows that lifestyle changes can lower the chances of getting breast cancer, even in people at high risk. To lower your risk:</p>
          <p  className="mt-10 text-2xl italic "><li> <span className="font-bold">Limit or stay away from alcohol.</span>
             It's safest not to drink alcohol. But if you do drink it, enjoy it in moderation. The more alcohol you have, the greater your risk of getting breast cancer. In general, women should have no more than one drink a day. Even small amounts raise the risk of breast cancer. One drink is about 12 ounces of beer, 5 ounces of wine, or 1.5 ounces of 80-proof distilled spirits.</li></p>
             
             
             
             <p  className="mt-10 text-2xl italic "><li> <span className="font-bold">Stay at a healthy weight. </span>Ask a member of your health care team whether your weight is healthy. If it is, work to maintain that weight. If you need to lose weight, ask your health care professional how to do so. Simple steps may help. Watch your portion sizes. Try to eat fewer calories. And slowly build up the amount of exercise you do</li></p>



             <p  className="mt-10 text-2xl italic "><li> <span className="font-bold">Get active.</span>
             Physical activity can help you stay at a healthy weight, which helps prevent breast cancer. So try to move more and sit less. Most healthy adults should aim for at least 150 minutes a week of moderate aerobic exercise. Or try to get at least 75 minutes of vigorous aerobic exercise a week. Aerobic exercise gets your heart pumping. Some examples are walking, biking, running and swimming. Also aim to do strength training at least twice a week.</li></p>
             
             
             <p  className="mt-10 text-2xl italic "><li> <span className="font-bold">Breastfeed.</span>If you have a baby, breastfeeding might play a role in helping prevent breast cancer. The longer you breastfeed, the greater the protective effect.</li></p>
             
             
             <p  className="mt-10 text-2xl italic "><li><span className="font-bold">Limit hormone therapy after menopause.</span>Combination hormone therapy uses estrogen and progestin. It may raise the risk of breast cancer. Talk with your health care professional about the risks and benefits of hormone therapy. You might be able to manage your symptoms with treatments and medicines that don't use hormones. If you decide that the benefits of short-term hormone therapy outweigh the risks, use the lowest amount that works for you. Have your health care team track the length of time you take hormones.</li></p>

             <p  className="mt-10 text-2xl italic "><li><span className="font-bold">If you smoke, quit</span> Some research suggests that smoking tobacco raises the risk of breast cancer. Breathing in another person's cigarette smoke also may raise the risk. If you or a loved one needs help quitting, talk with a member of your health care team.</li></p>


          </div>
         
        



        <div className="mt-20 px-4 w-full max-w-6xl">
  <h2 className="text-4xl font-bold italic text-black text-center mb-8">
    Watch & Learn
  </h2>
  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-5">
    <div className="aspect-w-16 aspect-h-9">
      <iframe
        className="w-full h-64 rounded-xl shadow-lg"
        src="https://www.youtube.com/embed/yyY5A7HnGrA"
        title="Breast Cancer Awareness"
        frameBorder="0"
        allowFullScreen
      ></iframe>
    </div>
    <div className="aspect-w-16 aspect-h-9">
      <iframe
        className="w-full h-64 rounded-xl shadow-lg"
        src="https://www.youtube.com/embed/rCwkKmLCxBk"
        title="Understanding Breast Cancer"
        frameBorder="0"
        allowFullScreen
      ></iframe>
    </div>
    <div className="aspect-w-16 aspect-h-9">
      <iframe
        className="w-full h-64 rounded-xl shadow-lg"
        src="https://www.youtube.com/embed/6KEcnKzpOmE"
        title="Understanding Breast Cancer"
        frameBorder="0"
        allowFullScreen
      ></iframe>
    </div>

    <div className="aspect-w-16 aspect-h-9">
      <iframe
        className="w-full h-64 rounded-xl shadow-lg"
        src="https://www.youtube.com/embed/jeELLC2L65k"
        title="Understanding Breast Cancer"
        frameBorder="0"
        allowFullScreen
      ></iframe>
    </div>

    <div className="aspect-w-16 aspect-h-9">
      <iframe
        className="w-full h-64 rounded-xl shadow-lg"
        src="https://www.youtube.com/embed/8RxbWnD6MHQ"
        title="Understanding Breast Cancer"
        frameBorder="0"
        allowFullScreen
      ></iframe>
    </div>

    <div className="aspect-w-16 aspect-h-9">
      <iframe
        className="w-full h-64 rounded-xl shadow-lg"
        src="https://www.youtube.com/embed/I7wSEIOz-1k"
        title="Understanding Breast Cancer"
        frameBorder="0"
        allowFullScreen
      ></iframe>
    </div>


  </div>
</div>

<div className="mt-20 px-4 max-w-6xl w-full text-black">
  <h2 className="text-4xl font-bold italic text-center mb-6">
    <u>Key Takeaways</u>
  </h2>
  <ul className="list-disc list-inside text-xl space-y-4 italic">
    <li>Breast cancer can affect both women and men, though it's more common in women.</li>
    <li>Early detection significantly improves treatment outcomes and survival rates.</li>
    <li>Regular self-exams, clinical check-ups, and mammograms are crucial.</li>
    <li>Genetics, lifestyle, and hormonal factors can all contribute to risk.</li>
    <li>There are different types of breast cancer, each requiring specific treatment.</li>
    <li>Maintaining a healthy lifestyle can help reduce the risk of developing breast cancer.</li>
    <li>Always consult healthcare professionals for guidance, especially if you're at higher risk.</li>
  </ul>
</div>

<h className=" mt-10 text-2xl italic">THANK YOU!</h>

 </div>


      <Footer />
    </>
  );
}

export default Learning;
