export default function () {
  this.transition(
    this.toRoute('event-list/event'),
    this.use('toLeft')
  );
};
