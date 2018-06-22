angular.module('primeiraApp').component('valueBox', {
  bindings: {
    grid: '@',
    colorClass: '@',
    value: '@',
    text: '@',
    iconClass: '@'
  },
  controller: [
    'gridSystem',
    function(gridSystem) {
      this.$onInit = () => this.gridClasses = gridSystem.toCssClasses(this.grid)
    }
  ],
  template: `
  <div class="{{ $ctrl.gridClasses }}">
    <div class="info-box">
        <span class="{{ $ctrl.colorClass }}"><i class="{{ $ctrl.iconClass }}"></i></span>

          <div class="info-box-content">
            <span class="info-box-text">{{ $ctrl.text }}</span>
            <span class="info-box-number">{{ $ctrl.value }}</span>
          </div>
        <!-- /.info-box-content -->
      </div>
    <!-- /.info-box -->
  </div>
  `
});
