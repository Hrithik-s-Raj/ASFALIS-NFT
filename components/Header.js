import Image from 'next/image'
import Link from 'next/link'
import openSeaLogo from '../assets/opensea.png'
import { AiOutlineSearch } from 'react-icons/ai'
import { CgProfile } from 'react-icons/cg'
import { MdOutlineAccountBalanceWallet } from 'react-icons/md'

const style = {
  wrapper: `bg-[#04111d] w-screen px-[1.2rem] py-[0.8rem] flex `,
  logoContainer: `flex items-center cursor-pointer`,
  logoText: ` ml-[0.8rem] text-white font-semibold text-2xl`,
  searchBar: `flex flex-1 mx-[0.8rem] w-max-[520px] items-center bg-[#363840] rounded-[0.8rem] hover:bg-[#4c505c]`,
  searchIcon: `text-[#8a939b] mx-3 font-bold text-lg`,
  searchInput: `h-[2.6rem] w-full border-0 bg-transparent outline-0 ring-0 px-2 pl-0 text-[#e6e8eb] placeholder:text-[#8a939b]`,
  headerItems: ` flex items-center justify-end`,
  headerItem: `text-white px-4 font-bold text-[#c8cacd] hover:text-white cursor-pointer`,
  headerIcon: `text-[#8a939b] text-3xl font-black px-4 hover:text-white cursor-pointer`,
}

function Header() {
  return (
    <div className="flex w-screen bg-[#04111d] px-[1.2rem] py-[0.8rem] ">
      <Link href="/">
        <div className="flex cursor-pointer items-center">
          <div className=" ml-[0.8rem] mr-4 text-2xl font-semibold text-white">
            ASFALIS NFT-MARKETPLACE
          </div>
        </div>
      </Link>
      <div className="w-max-[520px] mx-[0.8rem] flex flex-1 items-center rounded-[0.8rem] bg-[#363840] hover:bg-[#4c505c]">
        <div className="mx-3 text-lg font-bold text-[#8a939b]">
          <AiOutlineSearch />
        </div>
        <input
          className="h-[2.6rem] w-full border-0 bg-transparent px-2 pl-0 text-[#e6e8eb] outline-0 ring-0 placeholder:text-[#8a939b]"
          placeholder="Search"
        />
      </div>
      <div className=" flex items-center justify-end">
        <Link href="/collections/0x3e68473dEe2835c3DB228ba94efB95C6DD048614">
          <div className="cursor-pointer px-4 font-bold text-white  hover:text-white">
            Collections
          </div>
        </Link>

        <div className="cursor-pointer px-4 font-bold text-white  hover:text-white">
          Stats
        </div>
        <div className="cursor-pointer px-4 font-bold text-white hover:text-white">
          Resources
        </div>
        <div className="cursor-pointer px-4 text-3xl font-black text-[#8a939b] hover:text-white">
          <CgProfile />
        </div>
        <div className="cursor-pointer px-4 text-3xl font-black text-[#8a939b] hover:text-white">
          <MdOutlineAccountBalanceWallet />
        </div>
      </div>
    </div>
  )
}

export default Header
