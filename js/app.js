var $main = {
    $controlsCancel: document.querySelector('.cancel'),
    $controlEqual: document.querySelector('.equal'),
    $getNumbers: document.querySelectorAll('.numbers ul li'),
    $getOperators: document.querySelectorAll('.operetors ul li'),
    $getMonitor: document.querySelector('.monitor'),
    $config: {
        dotPress: true
    },

    init: function () {
        this.addToMonitor(this);
        this.startClaculate(this);
        this.clear();
    },

    addToMonitor: function ($this) {
        var $thisNumber = $this.$getNumbers;
        var $thisOperator = $this.$getOperators;
        for (var i = 0; i < $thisNumber.length; i++) {
            $thisNumber[i].addEventListener('click', function () {
                $this.addSymbolToMonitor($this, this);
            });
        }
        for (var j = 0; j < $thisOperator.length; j++) {
            $thisOperator[j].addEventListener('click', function () {
                $this.addSymbolToMonitor($this, this);
            });
        }
    },

    addSymbolToMonitor: function ($this, $childThis) {
        var $monitor = $this.$getMonitor;
        if ($monitor.innerHTML.trim() == '0') {
            $monitor.innerHTML = $childThis.innerHTML;
        } else {
            if ($childThis.innerHTML.trim() == '.' && $this.$config.dotPress) {
                $monitor.innerHTML = $monitor.innerHTML.trim() + $childThis.innerHTML.trim();
                $this.$config.dotPress = false;
            } else if ($childThis.innerHTML.trim() !== '.') {
                $monitor.innerHTML = $monitor.innerHTML.trim() + $childThis.innerHTML.trim();
            }
        }
    },
    startClaculate: function ($this) {
        $this.$controlEqual.addEventListener('click', function () {
            var getMonitor = $this.$getMonitor;
            var getCalculativeData = $this.calculate(getMonitor.innerHTML);
            if (getCalculativeData) {
                getMonitor.innerText = getCalculativeData;
            } else {
                getMonitor.innerText = 0;
            }
        });
    }
    ,
    calculate: function (str) {
        return eval(str);
    },

    clear: function () {
        $this = this;
        this.$controlsCancel.addEventListener('click', function () {
            $this.$getMonitor.innerText = 0;
            $this.$config.dotPress = true;
        });
    }

};

$main.init();