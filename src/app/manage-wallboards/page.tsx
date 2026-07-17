import Button from "@/components/Button";
import ManageWallboard from "@/components/ManageWallboard";
import SectionWrapper from "@/components/SectionWrapper";

export default function ManageWallboards() {
  const boards = [
    {
      image:
        "https://scontent.fcgp37-1.fna.fbcdn.net/v/t39.30808-6/733309621_122107350375294826_1753807513447775702_n.jpg?stp=dst-jpg_tt6&cstp=mx2048x2048&ctp=s2048x2048&_nc_cat=107&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeE7Ak-TEfk8JVOu8OMxSEQ7Q9rvIXAiOaxD2u8hcCI5rKRrjOdwrOd8cWEhzzPpO5eIArI5kdfTtZj_wgjqd451&_nc_ohc=2bdQv7FzOmYQ7kNvwGEljOF&_nc_oc=Adr2e2aCbcnee_Iwvst5jFuGaXp_1w8cKSlL2rA-Ys0g7FlwCoxn8S9AfirH3oTHFu0&_nc_zt=23&_nc_ht=scontent.fcgp37-1.fna&_nc_gid=D4Fo3qqxZZfZOd1Rvkt28g&_nc_ss=7b2a8&oh=00_AQAJUgch2qiJ0pUm-00-gxh_cr06ww1Og-dQY_LMHK8OTQ&oe=6A5FF0AB",
      name: "Everything In Time",
      code: "lm10-wc-01",
      description: "Lorem ipsum dolor sit amet",
      _id: "a1",
    },
    {
      image:
        "https://scontent.fcgp37-1.fna.fbcdn.net/v/t39.30808-6/731948585_122107350297294826_2033527315082083716_n.jpg?stp=dst-jpg_tt6&cstp=mx2048x2048&ctp=s2048x2048&_nc_cat=109&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeGDq_ksFryg_BXvwAVW_Kywmbsv0flypfWZuy_R-XKl9XK0nMhpF8v7obOikSx-5MYPR9o5rwWXzFGVdGkkCDZF&_nc_ohc=u0CDaF92MWoQ7kNvwFk7B7S&_nc_oc=AdpRC0FhwfI3gtuhyUSS0g21LdmCubcTx_Z8X1J4oN2yuc6ag-A7kl5WkM0MCiFHNlk&_nc_zt=23&_nc_ht=scontent.fcgp37-1.fna&_nc_gid=eZO0PzjzZdBfLVkmphwrgw&_nc_ss=7b2a8&oh=00_AQAPRutawsTcbq8TrwVoOZSz86HCHSjaDQjf2R2c7HMBtQ&oe=6A602703",
      name: "Prime CR7",
      code: "cr7-01",
      description: "Lorem ipsum dolor sit amet",
      _id: "b2",
    },
    {
      image:
        "https://scontent.fcgp37-1.fna.fbcdn.net/v/t39.30808-6/733912143_122107350333294826_4741458753986383623_n.jpg?stp=dst-jpg_tt6&cstp=mx2048x2048&ctp=s2048x2048&_nc_cat=106&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeFcagaJKXgQwzf2mQ3L8vH9bDxrJQfxRHFsPGslB_FEcd6tqW6jLizoA11deQRRYBPo-HV5nzwtHeuqhc-ey9gG&_nc_ohc=C8K_UCX11nIQ7kNvwFE7h1f&_nc_oc=AdpAEmpCZoyivFEYiAI98YMuNufapW_IQWBJvG5ZPzgqGuICfh7aVGsGx4hlE1NokFk&_nc_zt=23&_nc_ht=scontent.fcgp37-1.fna&_nc_gid=3gMc48yc_XD22cfLKOPZGA&_nc_ss=7b2a8&oh=00_AQAcpcJLuSHavI9IVtjxERi_nIklhJsykJG33PtAxu4rVQ&oe=6A5FFBF6",
      name: "UCL Messi",
      code: "lm10-ucl-02",
      description: "Lorem ipsum dolor sit amet",
      _id: "c3",
    },
    {
      image:
        "https://scontent.fcgp37-1.fna.fbcdn.net/v/t39.30808-6/731442738_122107350411294826_4993487273476311880_n.jpg?stp=dst-jpg_tt6&cstp=mx2048x2048&ctp=s2048x2048&_nc_cat=107&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeHZsQoAkSnOzKW0MC7W0q46liEoFZQJOx6WISgVlAk7Hkxq3uS13cEs1xjF4shw0-PS7LYYajdOFRCwfG-GpvLz&_nc_ohc=BBiBMq2N-ukQ7kNvwG3NqQn&_nc_oc=AdrQBBeM-OyEr949nlaaLt9JB7GlNXaIlZl0G70CjdJsKBVz1zQMN-gD1jBxwjLnHMo&_nc_zt=23&_nc_ht=scontent.fcgp37-1.fna&_nc_gid=w01I3H-Qfy_M1GyRii_o9Q&_nc_ss=7b2a8&oh=00_AQCSppyE-DAJ2RNdpw7Zoz70qmn2sTsH1q3CTiFuww_RkQ&oe=6A6023BD",
      name: "Brazilian Prince",
      code: "nyjr10-02",
      description: "Lorem ipsum dolor sit amet",
      _id: "d4",
    },
    {
      image:
        "https://scontent.fcgp37-1.fna.fbcdn.net/v/t39.30808-6/732464105_122107350561294826_3138846406114008746_n.jpg?stp=dst-jpg_tt6&cstp=mx2048x2048&ctp=s2048x2048&_nc_cat=111&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeFdXmTnrcGh4kHAh0zoA-sAVCRbLjrnWWVUJFsuOudZZYaUlm8c-6k9KWhMpSPPZ3eW7Xi0uEZi8hLfe3tOkjO9&_nc_ohc=eL2kg8hSwysQ7kNvwHchBVd&_nc_oc=AdobE12czAAxBB0693oBO-HQZzOzIHDz6p-q-3yFAgIBYA66139jL2aZgoKgTSYWdSc&_nc_zt=23&_nc_ht=scontent.fcgp37-1.fna&_nc_gid=W7n7fvFIMv_sAKMB99MdaA&_nc_ss=7b2a8&oh=00_AQAnaLxcUOtHQYsBTKE3u5s1XkVBMPH8vO5JoATryIZdng&oe=6A601B1F",
      name: "Prime CR7 - 02",
      code: "cr7-02",
      description: "Lorem ipsum dolor sit amet",
      _id: "e5",
    },
    {
      image:
        "https://scontent.fcgp37-1.fna.fbcdn.net/v/t39.30808-6/733471742_122107350273294826_8131397098206140078_n.jpg?stp=dst-jpg_tt6&cstp=mx2048x2048&ctp=s2048x2048&_nc_cat=110&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeFUzf8QaP_dwb6l0uxDlTgS47bQ4cauLZPjttDhxq4tkwFOllgdS8LobdNC24OJQwKtxXHWcxjxIuxvba8lBNAx&_nc_ohc=wtHHAdKMJSkQ7kNvwHc8vuq&_nc_oc=Ado-uVvlLIdZjr06_lI1yxw2Hcym3fqZ1JFo8IlRyjXkGWP-DJ0nrUAzMuXd19NDeZM&_nc_zt=23&_nc_ht=scontent.fcgp37-1.fna&_nc_gid=Gkwof5Gg9IBRkCsA3_J7tg&_nc_ss=7b2a8&oh=00_AQAoksVlbryMLfTX2kRh5EiqmA2GvX50zdhriu7u3qrgNQ&oe=6A6008AF",
      name: "Neymar Jr. - The Prince ",
      code: "nyjr10-01",
      description: "Lorem ipsum dolor sit amet",
      _id: "f6",
    },
  ];

  return (
    <SectionWrapper
      heading="Manage Wallboards"
      subheading="Manage or Delete your Wallboards accordingly"
    >
      <div className="flex items-center justify-end">
        <Button
          type="primary"
          text="Add Wallboards"
          task="hyperlink"
          href="/add-wallboards"
        />
      </div>

      <div className="flex flex-col gap-4 mt-8">
        {boards.map((board) => (
          <ManageWallboard key={board._id} id={board._id} image={board.image} name={board.name} code={board.code} description={board.description} />
        ))}
      </div>
    </SectionWrapper>
  );
}
