import NavigationCardList from "./NavigationCardList";

function QuickNavigation() {
  return (
    <section>
      <h2 className="text-5xl font-semibold text-(--text-color) text-center mb-16 relative max-lg:text-4xl max-md:text-3xl">
        <span>Quick </span>
        <span className="text-(--orange-text)">Navigation</span>
        <span className="absolute bg-(--orange-text) w-20 h-1 -bottom-4 left-1/2 -translate-x-1/2"></span>
      </h2>

      <NavigationCardList />
    </section>
  );
}

export default QuickNavigation;
