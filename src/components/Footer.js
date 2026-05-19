import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-[#0b0f19] pt-14 sm:pt-20 pb-8 sm:pb-10 border-t border-white/5 overflow-hidden">

      {/* TOP SECTION */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 grid grid-cols-2 md:grid-cols-4 gap-10 sm:gap-12 mb-14 sm:mb-16">

        {/* BRAND */}
        <div className="col-span-2 md:col-span-1">
          <h2 className="text-white text-2xl sm:text-4xl font-black mb-4 sm:mb-6 whitespace-nowrap">
            SkillSphere
          </h2>

          <p className="text-gray-400 text-sm sm:text-lg leading-relaxed max-w-sm">
            Premium courses for creators and professionals.
            Learn modern skills and grow faster with SkillSphere.
          </p>
        </div>

        {/* CONTACT */}
        <div>
          <h4 className="text-white text-sm sm:text-base font-bold mb-4 sm:mb-6">
            Contact
          </h4>

          <ul className="space-y-3 sm:space-y-4 text-[12px] sm:text-sm text-gray-400">
            <li className="break-all">support@skillsphere.com</li>
            <li>+8801533648004</li>
            <li>Dhaka, Bangladesh</li>
          </ul>
        </div>

        {/* RESOURCES */}
        <div>
          <h4 className="text-white text-sm sm:text-base font-bold mb-4 sm:mb-6">
            Resources
          </h4>

          <ul className="space-y-3 sm:space-y-4">
            <li>
              <a
                href="#"
                className="text-[12px] sm:text-sm text-gray-400 hover:text-white transition-colors"
              >
                Documentation
              </a>
            </li>

            <li>
              <a
                href="#"
                className="text-[12px] sm:text-sm text-gray-400 hover:text-white transition-colors"
              >
                Help Center
              </a>
            </li>

            <li>
              <a
                href="#"
                className="text-[12px] sm:text-sm text-gray-400 hover:text-white transition-colors"
              >
                Support
              </a>
            </li>
          </ul>
        </div>

        {/* SOCIAL */}
        <div>
          <h4 className="text-white text-sm sm:text-base font-bold mb-4 sm:mb-6">
            Social Links
          </h4>

          <div className="flex gap-3 sm:gap-4 flex-wrap">
            {["facebook.webp", "instagram.webp", "twitter.webp"].map(
              (icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-9 h-9 sm:w-10 sm:h-10 flex items-center justify-center rounded-full bg-white/5 hover:bg-white transition-all duration-300 group flex-shrink-0"
                >
                  <Image
                    src={`/${icon}`}
                    alt="social"
                    width={18}
                    height={18}
                    className="opacity-60 group-hover:opacity-100 transition-opacity duration-300"
                  />
                </a>
              )
            )}
          </div>
        </div>
      </div>

      {/* Footer BOTTOM */}
<div className="max-w-7xl mx-auto px-4 sm:px-6 pt-6 sm:pt-8 border-t border-white/10">

  <div className="flex items-center justify-between gap-3 flex-nowrap">

    {/* Left Side */}
    <p className="text-[9px] sm:text-xs text-gray-500 whitespace-nowrap">
      © 2026 SkillSphere. All rights reserved.
    </p>

    {/* Right Side */}
    <div className="flex items-center gap-3 sm:gap-8 text-[9px] sm:text-xs text-gray-500 whitespace-nowrap">
      <a
        href="#"
        className="hover:text-white transition-colors"
      >
        Privacy Policy
      </a>

      <a
        href="#"
        className="hover:text-white transition-colors"
      >
        Terms & Conditions
      </a>
    </div>
  </div>

  {/* Developed By */}
<div className="text-center pt-4 sm:pt-6 text-[9px] sm:text-[11px] text-gray-600">
  Developed by{" "}

  <a
    href="https://www.facebook.com/mehedi.hasan.arif.133022"
    target="_blank"
    rel="noopener noreferrer"
    className="text-gray-400 hover:text-white transition-colors underline underline-offset-2"
  >
    Mehedi Hasan Arif
  </a>
</div>
</div>
    </footer>
  );
}