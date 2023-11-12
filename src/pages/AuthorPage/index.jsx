import { Buttons } from '../../components/Buttons';

export const AuthorPage = () => {
  return (
    <div className="main">
      <h1>Kristýna Tlapáková</h1>
      <p className="description">
        Tady bude středně dlouhý odstavec o tom, kdo jsem, co dělám, proč to
        sakra dělám a proč se vyžívám v tom, že aktuálně trpím.
      </p>
      <Buttons value1="Chci vědět víc" value2="Čí to byl nápad" />
    </div>
  );
};