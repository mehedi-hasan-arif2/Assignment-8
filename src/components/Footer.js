import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="bg-[#0b0f19] pt-20 pb-10 border-t border-white/5">

      {/* TOP SECTION */}
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">

        {/* Logo Section */}
        <div>
          <h2 className="text-white text-4xl font-black mb-6">
            SkillSphere
          </h2>

          <p className="text-gray-400 text-lg leading-relaxed">
            Premium courses for creators and professionals.
            Learn modern skills and grow faster with SkillSphere.
          </p>
        </div>

        {/* Contact Section */}
        <div>
          <h4 className="text-white font-bold mb-6">
            Contact
          </h4>

          <ul className="space-y-4 text-sm text-gray-400">
            <li>Email: support@skillsphere.com</li>
            <li>Phone: +8801533648004</li>
            <li>Dhaka, Bangladesh</li>
          </ul>
        </div>

        {/* Resources Section */}
        <div>
          <h4 className="text-white font-bold mb-6">
            Resources
          </h4>

          <ul className="space-y-4">
            <li>
              <a href="#" className="text-sm text-gray-400 hover:text-white transition-colors">
                Documentation
              </a>
            </li>

            <li>
              <a href="#" className="text-sm text-gray-400 hover:text-white transition-colors">
                Help Center
              </a>
            </li>

            <li>
              <a href="#" className="text-sm text-gray-400 hover:text-white transition-colors">
                Support
              </a>
            </li>
          </ul>
        </div>

        {/* Social Links Section */}
        <div>
          <h4 className="text-white font-bold mb-6">
            Social Links
          </h4>

          <div className="flex gap-4">
            {['facebook.webp', 'instagram.webp', 'twitter.webp'].map((icon, i) => (
              <a
                key={i}
                href="#"
                className="w-10 h-10 flex items-center justify-center rounded-full bg-white/5 hover:bg-white transition-all group"
              >
                <Image
                  src={`/${icon}`}
                  alt="social"
                  width={20}
                  height={20}
                  className="opacity-60 group-hover:opacity-100"
                />
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* BOTTOM SECTION */}
      <div className="max-w-7xl mx-auto px-6 pt-8 border-t border-white/10 flex justify-between items-center flex-wrap gap-4">

        {/* Copyright */}
        <p className="text-xs text-gray-500">
          © 2026 SkillSphere. All rights reserved.
        </p>

        {/* Privacy & Terms */}
        <div className="flex gap-8 text-xs text-gray-500">
          <a href="#" className="hover:text-white transition-colors">
            Privacy Policy
          </a>

          <a href="#" className="hover:text-white transition-colors">
            Terms & Conditions
          </a>
        </div>
      </div>
    </footer>
  );
}