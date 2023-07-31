import Nav from '@/components/Nav'
import Footer from '@/components/footer/Footer'
import React from 'react'

const page = () => {
  return (
    <>
    <Nav />
    <div className='container mx-auto flex justify-center py-6'>
        <div className='max-w-[1200px]'>
        <h1 className='text-[30px] mb-2'>Title of blog</h1>
        <div className='w-full h-[600px]'>
            <img className='w-full h-full object-cover' src='https://smartcare.com.np/multiservice/test/uploads/brands_image/Vacuum_Cleaner_Repair_and_Maintenance_Services3.jpg' alt='single' />
        </div>
        <div className='mt-6'>
        Owener Manual: Every electronic equipments comes with an owner’s manual. This manual provides the user with sufficient information about how to use and maintain the gadget. The same thing goes for LED sets. They come with an owner’s manual too. Before you operate or clean the set, you may want to read the manual first

Turn of LED TV: when you not watching TV then it switch off by main plug, so that TV cool down. If you switch of your TV by main plug it’s really reduce your power consumption give best performance.
Use a Microfiber cleaning cloth for LED TV: Best cleaning experience you should consider using microfiber cleaning pieces. Some people recommend cotton whole because they are more breathable. However, microfiber cloths are more durable. In addition, they do not stick to your screen.  Older LED, or LCD screens can’t handle traditional cleaning methods or materials. With microfiber, you can eliminate stains, remove smudges, and fingerprints with ease.
Avoid Harmful Chemical. LED TV screen is very sensitive and fragile, so you ought to make sure that you keep chemicals as far away as possible. Another material you should never use is a detergent solution (water and detergent) Soap, scouring powder, was window cleaners, and any other general industrial cleaner should be avoided. Abrasive pads and towels made from paper should not be used either. Using any of these materials will lead to screen scratches, anti-glare coating damage, or permanent screen damage. The sad part is that the damage may not be noticeable at first, but over time, the same will become permanent.

Never spray your LED TV set directly with any substance: Avoid spraying your screen directly with any substance even if it is an electronic cleaning gel. Excessive spraying can damage the cabinet and the structural make-up of the screen. If you must use any cleaning solution, apply it on the napkin or microfiber cloth you are using and gently wipe the screen with it.

Use a Vacuum: To draw out dust and debris hidden in the crevices of the set, use a low suction vacuum. You may also use the vacuum cleaner’s soft brush to remove dust from the cable, vents, and ports of the TV

Adhere strictly to the User Manual: Your LED TV set comes with a user manual for a reason. The manual is meant to guide your use of the device. When cleaning your set, make sure you follow the directives of the manufacturer. Doing it any other way may damage the TV beyond repair.

Avoid strong cleaning agents: Just like we pointed out in the article, avoid strong cleaning agent as not all of them are good for your television’s screen. The screen is very sensitive, so bear this in mind. Some examples of cleaning agents to avoid include unmixed alcohol, ammonia, acetone, and Wax.

Maintaining your LED TV set requires a lot of patience and attention to detail. If you want the screen to remain in good shape, you need to clean it regularly and with proper cleaning materials. If you follow the tips in this article, your screen will remain bright and sharp for as long as you use the set.
        </div>
        </div>
    </div>
    <Footer />
    </>
  )
}

export default page